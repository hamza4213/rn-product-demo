import { useQuery } from "@tanstack/react-query";

import { useAxios } from "../axios-provider";

export type Product = {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
  id: number;
};

export const useProducts = () => {
  const axios = useAxios();

  return useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await axios.get("/products");
      return response.data;
    },
  });
};
