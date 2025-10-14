import { spacing } from "@/constants/spacing";
import {
  category,
  description,
  favoriteButton,
  favoriteText,
  img,
  priceStyle,
  rating,
  row,
  title,
} from "@/constants/styles";
import { useThemeColors } from "@/hooks/use-theme-color";
import { Product } from "@/src/api/hooks/useProducts";
import { useFavoritesStore } from "@/src/store/useFavoritesStore";
import { Link } from "expo-router";
import React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export const ProductCard = ({ item }: { item: Product }) => {
  const favorites = useFavoritesStore((state) => state.favorites);
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
  const favorite = favorites.includes(item.id);
  const {
    shadowColor,
    favoriteActive,
    favoriteInactive,
    secondary,
    background,
    text,
  } = useThemeColors();
  return (
    <Link href={`/productDetails?id=${item.id}`} asChild>
      <Pressable style={{ marginBottom: spacing.lg }}>
        <View
          style={[
            styles.card,
            { backgroundColor: background, shadowColor: shadowColor },
          ]}
        >
          <Image
            source={{ uri: item.image }}
            style={[img, { height: 300 }]}
            resizeMode="contain"
          />

          <Text style={[title, { color: text }]} numberOfLines={1}>
            {item.title}
          </Text>

          <Text style={[category, { color: secondary }]}>{item.category}</Text>

          <Text style={[description, { color: secondary }]} numberOfLines={2}>
            {item.description}
          </Text>

          <View style={row}>
            <Text style={[rating, { color: secondary }]}>
              ⭐ {item.rating.rate} ({item.rating.count})
            </Text>
            <Text style={[priceStyle, { color: text }]}>
              ${item.price.toFixed(2)}
            </Text>
          </View>

          <TouchableOpacity
            style={[
              favoriteButton,
              {
                backgroundColor: favorite ? favoriteActive : favoriteInactive,
              },
            ]}
            onPress={() => toggleFavorite(item.id)}
          >
            <Text style={[favoriteText, { color: text }]}>
              {favorite ? "♥" : "♡"}
            </Text>
          </TouchableOpacity>
        </View>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: spacing.md,
    padding: spacing.md,
    marginVertical: spacing.sm,
    marginHorizontal: spacing.sm,
    shadowOpacity: 0.1,
    shadowRadius: spacing.md,
    elevation: 3,
  },
});
