import { useColorScheme } from "@/hooks/use-color-scheme";
import { AxiosProvider } from "@/src/api/axios-provider";
import { initI18n } from "@/src/localization";
import { QueryProvider } from "@/src/providers/query-provider";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";

import "react-native-reanimated";

export const unstable_settings = {
  anchor: "(screens)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [isI18nInitialized, setIsI18nInitialized] = useState(false);

  useEffect(() => {
    initI18n().then(() => setIsI18nInitialized(true));
  }, []);
  if (!isI18nInitialized) {
    return null;
  }

  return (
    <AxiosProvider>
      <QueryProvider>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
              name="modal"
              options={{ presentation: "modal", title: "Modal" }}
            />
            <Stack.Screen name="(screens)" options={{ title: "Products" }} />
          </Stack>
          <StatusBar style="auto" />
        </ThemeProvider>
      </QueryProvider>
    </AxiosProvider>
  );
}
