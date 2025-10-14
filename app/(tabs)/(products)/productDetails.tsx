import { useThemeColor } from "@/hooks/use-theme-color";
import { useProductDetail } from "@/src/api/hooks/useProductDetails";
import { useFavoritesStore } from "@/src/store/useFavoritesStore";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
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
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
  const isFavorite = useFavoritesStore((state) => state.isFavorite);
  const loadFavorites = useFavoritesStore((state) => state.loadFavorites);

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
        <Text style={{ color: text }}>Error loading products list.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <View style={{ position: "relative" }}>
        <Image
          source={{ uri: product?.image }}
          style={{
            width: "100%",
            height: 300,
            borderRadius: 8,
            marginBottom: 16,
          }}
          resizeMode="contain"
        />
        <TouchableOpacity
          onPress={() => toggleFavorite(product?.id!)}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            padding: 8,
            borderRadius: 24,
            backgroundColor: "rgba(255,255,255,0.9)",
          }}
        >
          <Text
            style={{
              color: favorite ? favoriteActive : favoriteInactive,
              fontSize: 20,
            }}
          >
            {isFavorite(product?.id!) ? "♥" : "♡"}
          </Text>
        </TouchableOpacity>
      </View>

      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 8,
          color: text,
        }}
      >
        {product?.title}
      </Text>
      <Text style={{ fontSize: 18, color: "#2e7d32", marginBottom: 8 }}>
        ${product?.price.toFixed(2)}
      </Text>
      <Text style={{ fontSize: 16, color: secondary, marginBottom: 12 }}>
        {product?.category}
      </Text>
      <Text style={{ fontSize: 16, lineHeight: 22, color: secondary }}>
        {product?.description}
      </Text>

      <View
        style={{
          marginTop: 16,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 16, color: secondary }}>
          ⭐ {product?.rating.rate} / 5
        </Text>
        <Text style={{ fontSize: 14, color: secondary }}>
          ({product?.rating.count} reviews)
        </Text>
      </View>
    </ScrollView>
  );
}
