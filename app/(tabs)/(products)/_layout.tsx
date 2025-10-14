import { useThemeColor } from "@/hooks/use-theme-color";
import { Stack } from "expo-router";

export default function RootLayout() {
  const primary = useThemeColor({}, "primary");
  const background = useThemeColor({}, "background");

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: primary,
        },
        headerTintColor: background,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="product-list"
        options={{
          title: "Hamza Store",
        }}
      />
      <Stack.Screen
        name="productDetails"
        options={{
          title: "Product Details",
        }}
      />
    </Stack>
  );
}
