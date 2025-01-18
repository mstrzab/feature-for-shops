import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Checkout = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    country: "",
    town: "",
    postalCode: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.country || !formData.town || !formData.postalCode) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Order placed successfully!");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-white animate-fade-in">
      <div className="container max-w-lg py-8 px-4">
        <button
          onClick={() => navigate("/")}
          className="text-text-light hover:text-text mb-8"
        >
          ← Back to product
        </button>

        <form onSubmit={handleSubmit} className="space-y-6">
          <h1 className="text-3xl font-bold text-text">Checkout</h1>

          <div className="space-y-4">
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-text mb-1">
                Country
              </label>
              <input
                type="text"
                id="country"
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="town" className="block text-sm font-medium text-text mb-1">
                Town
              </label>
              <input
                type="text"
                id="town"
                value={formData.town}
                onChange={(e) => setFormData({ ...formData, town: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="postalCode" className="block text-sm font-medium text-text mb-1">
                Postal Code
              </label>
              <input
                type="text"
                id="postalCode"
                value={formData.postalCode}
                onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>
          </div>

          <div className="pt-4 border-t">
            <div className="flex justify-between text-text mb-4">
              <span>Delivery Cost</span>
              <span>300 ₽</span>
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-hover transition-colors"
            >
              Pay Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;