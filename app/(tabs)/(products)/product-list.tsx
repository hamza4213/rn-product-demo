import { ProductCard } from "@/components/ProductCard";
import { useProducts } from "@/src/api/hooks/useProducts";
import { useFavoritesStore } from "@/src/store/useFavoritesStore";
import { Link } from "expo-router";
import { useEffect } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";

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
        renderItem={({ item }) => (
          <Link href={`/productDetails`} asChild>
            <TouchableOpacity style={{ marginBottom: 16 }}>
              <ProductCard item={item} />
            </TouchableOpacity>
          </Link>
        )}
      />
    </View>
  );
}
