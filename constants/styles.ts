import { ImageStyle, TextStyle, ViewStyle } from "react-native";
import { spacing } from "./spacing";

export const img: ImageStyle = {
  width: "100%",
  borderRadius: spacing.sm,
  marginBottom: spacing.lg,
};
export const favoriteButton: ViewStyle = {
  position: "absolute",
  top: 10,
  right: 10,
  borderRadius: 20,
  width: 36,
  height: 36,
  justifyContent: "center",
  alignItems: "center",
};
export const favoriteText: TextStyle = {
  fontSize: spacing.lg,
};
