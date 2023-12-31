import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Redirect, Tabs, useRootNavigationState } from "expo-router";
import { useAuth } from "../../hooks/useAuth";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={26} style={{ marginBottom: -3 }} {...props} />;
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
          headerShown: false,
          tabBarLabel: "Pets",
          tabBarIcon: ({ color }) => <TabBarIcon name="paw" color={color} />,
          tabBarIconStyle: {
            marginTop: 10,
          },
          tabBarLabelStyle: {
            marginBottom: 10,
            fontSize: 14,
          },
          tabBarActiveTintColor: "#183E4B",
          tabBarStyle: {
            borderColor: "#FFF",
            backgroundColor: "#FFF",
            height: 80,
          },
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Conta",
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
          tabBarIconStyle: {
            marginTop: 10,
          },
          tabBarLabelStyle: {
            marginBottom: 10,
            fontSize: 14,
          },
          tabBarActiveTintColor: "#183E4B",
          tabBarStyle: {
            backgroundColor: "#FFF",
            height: 80,
          },
        }}
      />
    </Tabs>
  );
}
