import { Link } from "expo-router";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

export default function ProductListScreen() {
  const products = [
    { id: 1, title: "Product 1", image: "https://via.placeholder.com/150" },
    { id: 2, title: "Product 2", image: "https://via.placeholder.com/150" },
  ];

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Link href={`/productDetails`} asChild>
            <TouchableOpacity style={{ marginBottom: 16 }}>
              <Image
                source={{ uri: item.image }}
                style={{ width: "100%", height: 150, borderRadius: 8 }}
              />
              <Text style={{ marginTop: 8, fontSize: 16, fontWeight: "600" }}>
                {item.title}
              </Text>
            </TouchableOpacity>
          </Link>
        )}
      />
    </View>
  );
}
