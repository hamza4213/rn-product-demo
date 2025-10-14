import { ProductCard } from "@/components/ProductCard";
import { spacing } from "@/constants/spacing";
import { useThemeColor } from "@/hooks/use-theme-color";
import { useProducts } from "@/src/api/hooks/useProducts";
import { useFavoritesStore } from "@/src/store/useFavoritesStore";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ActivityIndicator, FlatList, Text, View } from "react-native";

export default function ProductListScreen() {
  const { data, isLoading, error } = useProducts();
  const loadFavorites = useFavoritesStore((state) => state.loadFavorites);
  const backgroundColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");
  const { t } = useTranslation();
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
        <Text style={{ color: textColor }}>{t("product:errorlist")}</Text>
      </View>
    );
  }
  return (
    <View style={{ flex: 1, padding: spacing.lg }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductCard item={item} />}
      />
    </View>
  );
}
