import { spacing } from "@/constants/spacing";
import { useThemeColor } from "@/hooks/use-theme-color";
import React from "react";
import { useTranslation } from "react-i18next";
import { Text, TouchableOpacity, View } from "react-native";

type props = {
  text: string;
  onRetry: () => void;
};
const Error = (props: props) => {
  const { text, onRetry } = props;
  const backgroundColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");
  const { t } = useTranslation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: spacing.xlg,
      }}
    >
      <Text
        style={{
          color: textColor,
          marginBottom: 16,
          fontSize: 16,
          textAlign: "center",
        }}
      >
        {text}
      </Text>

      <TouchableOpacity
        // onPress={onRetry}
        style={{
          backgroundColor: backgroundColor,
          paddingHorizontal: spacing.xlg,
          paddingVertical: spacing.sm,
          borderRadius: spacing.sm,
        }}
      >
        <Text
          style={{
            color: textColor,
            fontWeight: "bold",
            fontSize: spacing.lg,
          }}
        >
          {t("common:retry")}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Error;
