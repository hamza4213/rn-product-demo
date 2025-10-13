import { useProducts } from "@/src/api/hooks/useProducts";
import { useFavoritesStore } from "@/src/store/useFavoritesStore";
import { Link } from "expo-router";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

export default function ProductListScreen() {
  const { data, isLoading, error } = useProducts();
  const { favorites, toggleFavorite, isFavorite } = useFavoritesStore();
  console.log(data);
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
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
