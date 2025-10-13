import { useQuery } from "@tanstack/react-query";

import { useAxios } from "../axios-provider";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
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
