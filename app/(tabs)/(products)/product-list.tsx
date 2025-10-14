import Error from "@/components/Error";
import { ProductCard } from "@/components/ProductCard";
import { spacing } from "@/constants/spacing";
import { useThemeColor } from "@/hooks/use-theme-color";
import { useProducts } from "@/src/api/hooks/useProducts";
import { useFavoritesStore } from "@/src/store/useFavoritesStore";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ActivityIndicator, FlatList, View } from "react-native";

export default function ProductListScreen() {
  const { data, isLoading, error, refetch } = useProducts();
  const loadFavorites = useFavoritesStore((state) => state.loadFavorites);
  const backgroundColor = useThemeColor({}, "background");
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
      <Error
        text={t("product:errorlist")}
        onRetry={() => {
          refetch();
        }}
      />
    );
  }
  return (
    <View style={{ flex: 1, padding: spacing.lg }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <React.Fragment key={item.id}>
            <ProductCard item={item} />
          </React.Fragment>
        )}
      />
    </View>
  );
}
