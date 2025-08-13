import React from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";

export default function HomeScreen({ navigation }: any) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
      }}
    >
      <Text variant="headlineMedium" style={{ marginBottom: 20 }}>
        Welcome to Shopzy Home!
      </Text>
      <Button mode="contained" onPress={() => navigation.replace("Onboarding")}>
        Restart Onboarding
      </Button>
    </View>
  );
}
