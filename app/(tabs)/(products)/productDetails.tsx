import { spacing } from "@/constants/spacing";
import { favoriteButton, favoriteText, img } from "@/constants/styles";
import { useThemeColor } from "@/hooks/use-theme-color";
import { useProductDetail } from "@/src/api/hooks/useProductDetails";
import { useFavoritesStore } from "@/src/store/useFavoritesStore";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: product, isLoading, error } = useProductDetail(id!);
  const favorites = useFavoritesStore((state) => state.favorites);
  const favorite = favorites.includes(Number(id));
  const text = useThemeColor({}, "text");
  const background = useThemeColor({}, "card");
  const secondary = useThemeColor({}, "textSecondary");
  const favoriteActive = useThemeColor({}, "favoriteActive");
  const favoriteInactive = useThemeColor({}, "favoriteInactive");
  const price = useThemeColor({}, "price");
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
  const isFavorite = useFavoritesStore((state) => state.isFavorite);
  const loadFavorites = useFavoritesStore((state) => state.loadFavorites);
  const { t } = useTranslation();
  useEffect(() => {
    loadFavorites();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={background} />
      </View>
    );
  }
  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: text }}>{t("product:errorDetails")}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1, padding: spacing.lg }}>
      <View style={{ position: "relative" }}>
        <Image
          source={{ uri: product?.image }}
          style={[img, { height: 300 }]}
          resizeMode="contain"
        />
        <TouchableOpacity
          onPress={() => toggleFavorite(product?.id!)}
          // style={favoriteButton}
          style={[
            favoriteButton,
            {
              backgroundColor: favorite ? favoriteActive : favoriteInactive,
            },
          ]}
        >
          <Text style={[favoriteText, { color: text }]}>
            {isFavorite(product?.id!) ? "♥" : "♡"}
          </Text>
        </TouchableOpacity>
      </View>

      <Text
        style={{
          fontSize: spacing.xl,
          fontWeight: "bold",
          marginBottom: spacing.xl,
          color: text,
        }}
      >
        {product?.title}
      </Text>
      <Text style={{ fontSize: spacing.xlg, color: price, marginBottom: 8 }}>
        ${product?.price.toFixed(2)}
      </Text>
      <Text
        style={{ fontSize: spacing.xl, color: secondary, marginBottom: 12 }}
      >
        {product?.category}
      </Text>
      <Text
        style={{
          fontSize: spacing.lg,
          lineHeight: spacing.xlg,
          color: secondary,
        }}
      >
        {product?.description}
      </Text>

      <View
        style={{
          marginTop: spacing.lg,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: spacing.lg, color: secondary }}>
          ⭐ {product?.rating.rate} / 5
        </Text>
        <Text style={{ fontSize: spacing.lg, color: secondary }}>
          ({product?.rating.count} {t("common:reviews")})
        </Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({});
