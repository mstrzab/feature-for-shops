import { useQuery } from "@tanstack/react-query";

interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
  dimensions?: string;
}

export const useProductSync = () => {
  return useQuery({
    queryKey: ["moysklad-products"],
    queryFn: async () => {
      const response = await fetch("/api/moysklad/products", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) throw new Error("Failed to fetch products");
      return response.json() as Promise<Product[]>;
    },
  });
};