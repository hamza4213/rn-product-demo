import { ProductCard } from "@/components/ProductCard";
import { useThemeColor } from "@/hooks/use-theme-color";
import { useProducts } from "@/src/api/hooks/useProducts";
import { useFavoritesStore } from "@/src/store/useFavoritesStore";
import { useEffect } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";

export default function ProductListScreen() {
  const { data, isLoading, error } = useProducts();
  const loadFavorites = useFavoritesStore((state) => state.loadFavorites);
  const backgroundColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");
  useEffect(() => {
    loadFavorites();
  }, []);
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={backgroundColor} />
      </View>
    );
  }
  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: textColor }}>Error loading products list.</Text>
      </View>
    );
  }
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
