import { useNavigate } from "react-router-dom";
import { ProductCarousel } from "@/components/ProductCarousel";
import { useToast } from "@/hooks/use-toast";
import { sendOrderConfirmation } from "@/services/telegram";
import { useProductSync } from "@/services/moysklad";
import { supabase } from "@/lib/supabase";

const generateOrderNumber = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

const Index = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { data: products, isLoading } = useProductSync();

  const handlePayment = async () => {
    try {
      const orderNumber = generateOrderNumber();
      const productName = "Premium Laptop"; // This would come from products data
      const buyerId = "default-buyer"; // This would come from auth

      // Create order in Supabase
      const { error } = await supabase
        .from("orders")
        .insert({
          order_number: orderNumber,
          product_name: productName,
          buyer_id: buyerId,
          status: "paid"
        });

      if (error) throw error;

      // Send Telegram confirmation
      await sendOrderConfirmation(orderNumber, productName);

      toast({
        title: "Payment Successful",
        description: `Your order number is #${orderNumber}`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process payment",
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-[#F2FCE2] animate-fade-in">
      <main className="container py-8 px-4 sm:px-6 lg:px-8">
        <ProductCarousel />
        
        <div className="max-w-2xl mx-auto mt-8 text-center">
          <h1 className="text-4xl font-bold text-text">Premium Laptop</h1>
          <p className="mt-4 text-2xl font-semibold text-text">149,999 ₽</p>
          
          <div className="mt-6 space-y-4 text-text-light">
            <p>Dimensions: 30.41 x 21.24 x 1.61 cm</p>
            <p>Weight: 1.4 kg</p>
          </div>
          
          <button
            onClick={handlePayment}
            className="mt-8 px-8 py-4 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors"
          >
            Buy Now
          </button>
        </div>
      </main>
    </div>
  );
};

export default Index;