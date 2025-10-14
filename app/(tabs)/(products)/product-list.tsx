import { ProductCard } from "@/components/ProductCard";
import { useProducts } from "@/src/api/hooks/useProducts";
import { useFavoritesStore } from "@/src/store/useFavoritesStore";
import { useEffect } from "react";
import { FlatList, View } from "react-native";

export default function ProductListScreen() {
  const { data, isLoading, error } = useProducts();
  const loadFavorites = useFavoritesStore((state) => state.loadFavorites);

  useEffect(() => {
    loadFavorites();
  }, []);
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductCard item={item} />}
      />
    </View>
  );
}
