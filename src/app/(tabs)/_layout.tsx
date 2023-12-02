import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Redirect, Tabs, useRootNavigationState } from "expo-router";
import { useAuth } from "../../hooks/useAuth";
import { View } from "react-native";
import { Button, Text } from "native-base";
import { AddRoundedIcon } from "../../components/Icons/AddRoundedIcon";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const rootNavigationState = useRootNavigationState();

  const { user } = useAuth();

  if (!user) {
    if (!rootNavigationState?.key) return null;

    return <Redirect href="/login" />;
  }

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Pets",
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="laptop" color={color} />,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Conta",
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="laptop" color={color} />,
        }}
      />
    </Tabs>
  );
}
