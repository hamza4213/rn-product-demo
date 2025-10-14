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
export const title: TextStyle = {
  fontSize: spacing.lg,
  fontWeight: "600",
};
export const category: TextStyle = {
  fontSize: spacing.lg,
  marginVertical: spacing.sm,
};
export const description: TextStyle = {
  fontSize: spacing.xlg,
  marginBottom: spacing.sm,
};
export const row: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: spacing.xs,
  marginTop: spacing.md,
};
export const rating: TextStyle = {
  fontSize: spacing.lg,
  fontWeight: "bold",
};
export const priceStyle: TextStyle = {
  fontWeight: "bold",
};
