import { useQuery } from "@tanstack/react-query";
import { useAxios } from "../axios-provider";
import { Product } from "./useProducts";

export const useProductDetail = (id: string | number) => {
  const axios = useAxios();

  return useQuery<Product, Error>({
    queryKey: ["product", id],
    queryFn: async () => {
      const response = await axios.get(`/products/${id}`);
      return response.data;
    },
    enabled: !!id,
  });
};
