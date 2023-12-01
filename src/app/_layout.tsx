import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Redirect, Slot, SplashScreen, Stack } from "expo-router";
import { AuthProvider } from "../contexts/AuthContext";
import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import TabLayout from "./(tabs)/_layout";
import { NativeBaseProvider } from "native-base";

export { ErrorBoundary } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <AuthProvider>
      <NativeBaseProvider>
        <Slot />
      </NativeBaseProvider>
    </AuthProvider>
  );
}
