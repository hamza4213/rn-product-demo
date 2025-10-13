import { Product } from "@/src/api/hooks/useProducts";
import { useFavoritesStore } from "@/src/store/useFavoritesStore";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const ProductCard = ({ item }: { item: Product }) => {
  const { toggleFavorite, isFavorite } = useFavoritesStore();
  const favorite = isFavorite(item.id);

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: item.image }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title} numberOfLines={1}>
        {item.title}
      </Text>
      <Text style={styles.category}>{item.category}</Text>
      <Text style={styles.description} numberOfLines={2}>
        {item.description}
      </Text>
      <View style={styles.row}>
        <Text style={styles.rating}>
          ⭐ {item.rating.rate} ({item.rating.count})
        </Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      </View>
      <TouchableOpacity
        style={[styles.favoriteButton, favorite && styles.favoriteActive]}
        onPress={() => toggleFavorite(item.id)}
      >
        <Text style={styles.favoriteText}>{favorite ? "♥" : "♡"}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
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
