import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useThemeColor } from "@/hooks/use-theme-color";
import { translate } from "@/src/localization/translate";
import i18next from "i18next";
import React, { useEffect, useState } from "react";
import {
  Appearance,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";

export default function SettingsScreen() {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState(colorScheme ?? "light");
  const [language, setLanguage] = useState(
    i18next.language.startsWith("ur") ? "ur" : "en"
  );

  const backgroundColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");

  useEffect(() => {
    Appearance.setColorScheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const toggleLanguage = () => {
    const newLang = language === "en" ? "ur" : "en";
    i18n.changeLanguage(newLang);
    setLanguage(newLang);
  };

  return (
    <ThemedView style={[styles.container, { backgroundColor }]}>
      <ThemedText type="title" style={[styles.header, { color: textColor }]}>
        {translate("settings:title", "Settings")}
      </ThemedText>

      {/* Theme Toggle */}
      <View style={styles.row}>
        <Text style={[styles.label, { color: textColor }]}>
          {translate("settings:theme", "Dark Mode")}
        </Text>
        <Switch
          value={theme === "dark"}
          onValueChange={toggleTheme}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={theme === "dark" ? "#f4f3f4" : "#f4f3f4"}
        />
      </View>

      {/* Language Toggle */}
      <TouchableOpacity style={styles.row} onPress={toggleLanguage}>
        <Text style={[styles.label, { color: textColor }]}>
          {translate("settings:language", "Language")}
        </Text>
        <Text style={[styles.value, { color: textColor }]}>
          {language === "en" ? "English" : "اردو"}
        </Text>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  label: {
    fontSize: 16,
  },
  value: {
    fontSize: 16,
    fontWeight: "500",
  },
});
