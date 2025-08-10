// src/context/ThemeContext.tsx
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Appearance, ColorSchemeName } from "react-native";
import {
  Provider as PaperProvider,
  MD3Theme as PaperTheme,
} from "react-native-paper";
import { darkTheme, lightTheme } from "../theme/theme";

type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
  theme: PaperTheme;
};

const THEME_KEY = "app:theme:v1";
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isDark, setIsDark] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const saved = await AsyncStorage.getItem(THEME_KEY);
      if (saved) {
        setIsDark(JSON.parse(saved));
      } else {
        const sys: ColorSchemeName = Appearance.getColorScheme();
        setIsDark(sys === "dark");
      }
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    if (!loading) {
      AsyncStorage.setItem(THEME_KEY, JSON.stringify(isDark));
    }
  }, [isDark, loading]);

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  const theme = useMemo(() => (isDark ? darkTheme : lightTheme), [isDark]);

  if (loading) return null;

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, theme }}>
      <PaperProvider theme={theme}>{children}</PaperProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx)
    throw new Error("useThemeContext must be used within ThemeProvider");
  return ctx;
};
