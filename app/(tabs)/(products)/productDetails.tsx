import { useProductDetail } from "@/src/api/hooks/useProductDetails";
import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: product, isLoading, error } = useProductDetail(id!);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  if (error || !product) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Error loading product details.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <Image
        source={{ uri: product.image }}
        style={{
          width: "100%",
          height: 300,
          borderRadius: 8,
          marginBottom: 16,
        }}
        resizeMode="contain"
      />
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 8 }}>
        {product.title}
      </Text>
      <Text style={{ fontSize: 18, color: "#2e7d32", marginBottom: 8 }}>
        ${product.price.toFixed(2)}
      </Text>
      <Text style={{ fontSize: 16, color: "#555", marginBottom: 12 }}>
        {product.category}
      </Text>
      <Text style={{ fontSize: 16, lineHeight: 22 }}>
        {product.description}
      </Text>

      <View
        style={{
          marginTop: 16,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 16 }}>⭐ {product.rating.rate} / 5</Text>
        <Text style={{ fontSize: 14, color: "#777" }}>
          ({product.rating.count} reviews)
        </Text>
      </View>
    </ScrollView>
  );
}
