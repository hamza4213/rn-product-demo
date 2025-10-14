import { useThemeColor } from "@/hooks/use-theme-color";
import { Stack } from "expo-router";
import { useTranslation } from "react-i18next";

export default function RootLayout() {
  const primary = useThemeColor({}, "primary");
  const background = useThemeColor({}, "background");
  const { t } = useTranslation();

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
      <Stack.Screen name="product-list" options={{ title: t("app:title") }} />
      <Stack.Screen
        name="productDetails"
        options={{ title: t("product:details") }}
      />
    </Stack>
  );
}
