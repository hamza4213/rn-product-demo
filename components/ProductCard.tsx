import { useThemeColor } from "@/hooks/use-theme-color";
import { Product } from "@/src/api/hooks/useProducts";
import { useFavoritesStore } from "@/src/store/useFavoritesStore";
import { Link } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const ProductCard = ({ item }: { item: Product }) => {
  const favorites = useFavoritesStore((state) => state.favorites);
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
  const favorite = favorites.includes(item.id);
  const background = useThemeColor({}, "card");
  const text = useThemeColor({}, "text");
  const secondary = useThemeColor({}, "textSecondary");
  const favoriteActive = useThemeColor({}, "favoriteActive");
  const favoriteInactive = useThemeColor({}, "favoriteInactive");
  return (
    <Link href={`/productDetails?id=${item.id}`} asChild>
      <TouchableOpacity style={{ marginBottom: 16 }}>
        <View style={[styles.card, { backgroundColor: background }]}>
          <Image
            source={{ uri: item.image }}
            style={styles.image}
            resizeMode="contain"
          />

          <Text style={[styles.title, { color: text }]} numberOfLines={1}>
            {item.title}
          </Text>

          <Text style={[styles.category, { color: secondary }]}>
            {item.category}
          </Text>

          <Text
            style={[styles.description, { color: secondary }]}
            numberOfLines={2}
          >
            {item.description}
          </Text>

          <View style={styles.row}>
            <Text style={[styles.rating, { color: secondary }]}>
              ⭐ {item.rating.rate} ({item.rating.count})
            </Text>
            <Text style={[styles.price, { color: text }]}>
              ${item.price.toFixed(2)}
            </Text>
          </View>

          <TouchableOpacity
            style={[
              styles.favoriteButton,
              {
                backgroundColor: favorite ? favoriteActive : favoriteInactive,
              },
            ]}
            onPress={() => toggleFavorite(item.id)}
          >
            <Text style={[styles.favoriteText, { color: text }]}>
              {favorite ? "♥" : "♡"}
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  category: {
    color: "#777",
    fontSize: 13,
    marginBottom: 6,
  },
  description: {
    fontSize: 13,
    color: "#555",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },
  rating: {
    fontSize: 13,
    color: "#444",
  },
  price: {
    fontWeight: "bold",
    color: "#000",
  },
  favoriteButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#eee",
    borderRadius: 20,
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
  },
  favoriteActive: {
    backgroundColor: "#ffccd5",
  },
  favoriteText: {
    fontSize: 18,
  },
});
