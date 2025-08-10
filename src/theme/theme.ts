import { Platform } from "react-native";
import {
  MD3DarkTheme as DefaultDarkTheme,
  MD3LightTheme as DefaultLightTheme,
  MD3Theme,
  configureFonts,
} from "react-native-paper";
import { MD3Type } from "react-native-paper/lib/typescript/types";

const fontConfig: Record<string, MD3Type> = {
  displayLarge: {
    fontFamily: Platform.select({
      ios: "Poppins_400Regular",
      android: "Poppins_400Regular",
      default: "Poppins_400Regular",
    }),
    fontWeight: "400",
    fontSize: 57,
    lineHeight: 64,
    letterSpacing: 0,
  },
  displayMedium: {
    fontFamily: Platform.select({
      ios: "Poppins_400Regular",
      android: "Poppins_400Regular",
      default: "Poppins_400Regular",
    }),
    fontWeight: "400",
    fontSize: 45,
    lineHeight: 52,
    letterSpacing: 0,
  },
  displaySmall: {
    fontFamily: Platform.select({
      ios: "Poppins_400Regular",
      android: "Poppins_400Regular",
      default: "Poppins_400Regular",
    }),
    fontWeight: "400",
    fontSize: 36,
    lineHeight: 44,
    letterSpacing: 0,
  },
  headlineLarge: {
    fontFamily: Platform.select({
      ios: "Poppins_500Medium",
      android: "Poppins_500Medium",
      default: "Poppins_500Medium",
    }),
    fontWeight: "500",
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: 0,
  },
  headlineMedium: {
    fontFamily: Platform.select({
      ios: "Poppins_500Medium",
      android: "Poppins_500Medium",
      default: "Poppins_500Medium",
    }),
    fontWeight: "500",
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: 0,
  },
  headlineSmall: {
    fontFamily: Platform.select({
      ios: "Poppins_500Medium",
      android: "Poppins_500Medium",
      default: "Poppins_500Medium",
    }),
    fontWeight: "500",
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: 0,
  },
  titleLarge: {
    fontFamily: Platform.select({
      ios: "Poppins_400Regular",
      android: "Poppins_400Regular",
      default: "Poppins_400Regular",
    }),
    fontWeight: "400",
    fontSize: 22,
    lineHeight: 28,
    letterSpacing: 0,
  },
  titleMedium: {
    fontFamily: Platform.select({
      ios: "Poppins_500Medium",
      android: "Poppins_500Medium",
      default: "Poppins_500Medium",
    }),
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  titleSmall: {
    fontFamily: Platform.select({
      ios: "Poppins_500Medium",
      android: "Poppins_500Medium",
      default: "Poppins_500Medium",
    }),
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.1,
  },
  labelLarge: {
    fontFamily: Platform.select({
      ios: "Poppins_500Medium",
      android: "Poppins_500Medium",
      default: "Poppins_500Medium",
    }),
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.1,
  },
  labelMedium: {
    fontFamily: Platform.select({
      ios: "Poppins_500Medium",
      android: "Poppins_500Medium",
      default: "Poppins_500Medium",
    }),
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.5,
  },
  labelSmall: {
    fontFamily: Platform.select({
      ios: "Poppins_300Light",
      android: "Poppins_300Light",
      default: "Poppins_300Light",
    }),
    fontWeight: "300",
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4,
  },
  bodyLarge: {
    fontFamily: Platform.select({
      ios: "Poppins_400Regular",
      android: "Poppins_400Regular",
      default: "Poppins_400Regular",
    }),
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  bodyMedium: {
    fontFamily: Platform.select({
      ios: "Poppins_400Regular",
      android: "Poppins_400Regular",
      default: "Poppins_400Regular",
    }),
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
  },
  bodySmall: {
    fontFamily: Platform.select({
      ios: "Poppins_300Light",
      android: "Poppins_300Light",
      default: "Poppins_300Light",
    }),
    fontWeight: "300",
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4,
  },
};

const fonts = configureFonts({ config: fontConfig, isV3: true });

export type AppTheme = MD3Theme & {
  colors: MD3Theme["colors"] & {
    text: string;
    textSecondary: string;
    border: string;
    grayLight: string;
    grayMedium: string;
    grayDark: string;
    warning: string;
    success: string;
  };
};

export const lightTheme: AppTheme = {
  ...DefaultLightTheme,
  colors: {
    ...DefaultLightTheme.colors,
    primary: "#2563EB",
    secondary: "#F59E0B",
    background: "#FFFFFF",
    surface: "#F9FAFB",
    text: "#1E293B",
    textSecondary: "#64748B",
    border: "#E2E8F0",
    grayLight: "#E5E7EB",
    grayMedium: "#CBD5E1",
    grayDark: "#475569",
    error: "#DC2626",
    warning: "#FBBF24",
    success: "#22C55E",
  },
  fonts,
};

export const darkTheme: AppTheme = {
  ...DefaultDarkTheme,
  colors: {
    ...DefaultDarkTheme.colors,
    primary: "#3B82F6",
    secondary: "#F59E0B",
    background: "#121212",
    surface: "#1E293B",
    text: "#E0E7FF",
    textSecondary: "#94A3B8",
    border: "#334155",
    grayLight: "#334155",
    grayMedium: "#475569",
    grayDark: "#64748B",
    error: "#EF4444",
    warning: "#FBBF24",
    success: "#22C55E",
  },
  fonts,
};
