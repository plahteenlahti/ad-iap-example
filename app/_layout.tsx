import { Stack } from "expo-router";
import { useEffect } from "react";
import { Platform } from "react-native";
import Purchases from "react-native-purchases";

export default function RootLayout() {
  useEffect(() => {
    // Enable development logging
    Purchases.setLogLevel(Purchases.LOG_LEVEL.DEBUG);

    if (Platform.OS === "ios") {
      Purchases.configure({ apiKey: "your_ios_api_key" });
    } else if (Platform.OS === "android") {
      Purchases.configure({ apiKey: "your_android_api_key" });
    }
  }, []);

  return <Stack screenOptions={{ title: "Article" }} />;
}
