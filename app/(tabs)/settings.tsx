import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { spacing } from "@/constants/spacing";
import { row } from "@/constants/styles";
import { useThemeColors } from "@/hooks/use-theme-color";
import AsyncStorage from "@react-native-async-storage/async-storage";
import i18n from "i18next";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Appearance,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";

export default function SettingsScreen() {
  const { t } = useTranslation();
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState(colorScheme ?? "light");
  const [language, setLanguage] = useState(
    i18n.language.startsWith("ur") ? "ur" : "en"
  );
  const { background, text } = useThemeColors();

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
    <ThemedView style={[styles.container, { backgroundColor: background }]}>
      <ThemedText type="title" style={[styles.header, { color: text }]}>
        {t("settings:title")}
      </ThemedText>

      <View style={row}>
        <Text style={[styles.label, { color: text }]}>{t("common:theme")}</Text>
        <Switch
          value={theme === "dark"}
          onValueChange={toggleTheme}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor="#f4f3f4"
        />
      </View>

      <TouchableOpacity style={row} onPress={toggleLanguage}>
        <Text style={[styles.label, { color: text }]}>
          {t("common:language")}
        </Text>
        <Text style={[styles.value, { color: text }]}>
          {language === "en" ? "English" : "اردو"}
        </Text>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: spacing.xlg },
  header: { fontSize: spacing.xl, fontWeight: "bold", marginBottom: 30 },
  label: { fontSize: spacing.lg },
  value: { fontSize: spacing.lg, fontWeight: "500" },
});
