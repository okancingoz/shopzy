import React, { useState } from "react";
import { Dimensions, Image, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { useThemeContext } from "../hooks/useThemeContext";

const { width, height } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    title: "Easy Shopping",
    description:
      "Quickly find products and complete your purchase with Shopzy.",
    image: require("../../assets/images/onboarding1.jpg"),
  },
  {
    id: "2",
    title: "Wide Product Range",
    description: "Choose from thousands of products easily and effortlessly.",
    image: require("../../assets/images/onboarding2.jpg"),
  },
  {
    id: "3",
    title: "Secure Payment",
    description: "Your shopping is safe with multiple secure payment options.",
    image: require("../../assets/images/onboarding3.jpg"),
  },
];

export default function OnboardingScreen({ navigation }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { theme } = useThemeContext();

  const slide = slides[currentIndex];

  return (
    <View className="flex-1 ">
      <View className="flex-2">
        <Image
          source={slide.image}
          style={{ height: "100%", width: "100%" }}
          resizeMode="cover"
        />
      </View>

      <View
        className="flex-1 rounded-tl-3xl rounded-tr-3xl -mt-[24px]
        justify-between"
        style={{
          backgroundColor: theme.colors.background,
        }}
      >
        <View className="flex-1 items-center justify-center px-4 ">
          <Text
            variant="displaySmall"
            className="mb-4"
            style={{ color: theme.colors.primary }}
          >
            {slide.title}
          </Text>
          <Text
            variant="bodyLarge"
            style={{ color: theme.colors.textSecondary, textAlign: "center" }}
          >
            {slide.description}
          </Text>
        </View>

        <View className="flex-1 px-8 justify-center">
          {currentIndex === slides.length - 1 ? (
            <Button
              mode="contained"
              onPress={() => navigation.replace("Home")}
              contentStyle={{
                width: "100%",
                height: 64,
                justifyContent: "center",
              }}
            >
              Get Started
            </Button>
          ) : (
            <Button
              mode="outlined"
              onPress={() => setCurrentIndex((prev) => prev + 1)}
              contentStyle={{
                width: "100%",
                height: 64,
                justifyContent: "center",
              }}
            >
              Next
            </Button>
          )}
        </View>
      </View>
    </View>
  );
}
