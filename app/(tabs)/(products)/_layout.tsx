import { useThemeColor } from "@/hooks/use-theme-color";
import { translate } from "@/src/localization/translate";
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
        options={{ title: translate("app:title") }}
      />
      <Stack.Screen
        name="productDetails"
        options={{ title: translate("product:details") }}
      />
    </Stack>
  );
}
