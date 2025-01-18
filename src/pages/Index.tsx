import { useNavigate } from "react-router-dom";
import { ProductCarousel } from "@/components/ProductCarousel";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white animate-fade-in">
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
            onClick={() => navigate("/checkout")}
            className="mt-8 px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-hover transition-colors"
          >
            Buy Now
          </button>
        </div>
      </main>
    </div>
  );
};

export default Index;