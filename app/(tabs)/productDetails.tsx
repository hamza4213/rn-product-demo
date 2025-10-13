import { useLocalSearchParams } from "expo-router";
import { Image, Text, View } from "react-native";

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Image
        source={{ uri: "https://via.placeholder.com/300" }}
        style={{ width: "100%", height: 300, borderRadius: 8 }}
      />
      <Text style={{ fontSize: 24, fontWeight: "bold", marginVertical: 12 }}>
        Product {id}
      </Text>
      <Text style={{ fontSize: 16, color: "#555" }}>
        This is a placeholder for product details. Later, we will fetch real
        data from the API.
      </Text>
    </View>
  );
}
