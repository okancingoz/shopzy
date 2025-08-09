import React from "react";
import { Provider as PaperProvider, Surface, Text } from "react-native-paper";
import "./global.css";
import { useLoadFonts } from "./src/hooks/useLoadFonts";
import { lightTheme } from "./src/theme/theme";

export default function App() {
  const fontsLoaded = useLoadFonts();

  if (!fontsLoaded) {
    return <Text>Loading Fonts...</Text>;
  }

  console.log("Theme fonts:", lightTheme.fonts);

  return (
    <PaperProvider theme={lightTheme}>
      <Surface className="flex-1 items-center justify-center bg-white">
        <Text
          variant="labelLarge"
          style={{ color: lightTheme.colors.grayDark }}
        >
          This text uses Poppins font.
        </Text>
      </Surface>
    </PaperProvider>
  );
}
