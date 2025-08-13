import React from "react";
import "./global.css";
import { ThemeProvider } from "./src/context/ThemeContext";
import { useLoadFonts } from "./src/hooks/useLoadFonts";
import MainNavigator from "./src/navigation/RootNavigator";

export default function App() {
  const fontsLoaded = useLoadFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <MainNavigator />
    </ThemeProvider>
  );
}
