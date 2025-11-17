import { spacing } from "@/constants/spacing";
import { useThemeColors } from "@/hooks/use-theme-color";
import AsyncStorage from "@react-native-async-storage/async-storage";
import i18n from "i18next";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Appearance, StyleSheet, Text, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TailwindScreen() {
  const { t } = useTranslation();
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState(colorScheme ?? "light");
  const [language, setLanguage] = useState(
    i18n.language.startsWith("ur") ? "ur" : "en"
  );
  const { background, text, trueColor, falseColor } = useThemeColors();

  useEffect(() => {
    Appearance.setColorScheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const toggleLanguage = async () => {
    const newLang = i18n.language === "en" ? "ur" : "en";
    await i18n.changeLanguage(newLang);
    await AsyncStorage.setItem("language", newLang);
    setLanguage(newLang);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>{"Hello hellllo ya"}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: spacing.xlg },
  header: {
    fontSize: spacing.xl,
    fontWeight: "bold",
    marginBottom: spacing.xxl,
  },
  label: { fontSize: spacing.lg },
  value: { fontSize: spacing.lg, fontWeight: "500" },
});
