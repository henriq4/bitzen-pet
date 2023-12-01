import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Redirect, Tabs, useRootNavigationState } from "expo-router";
import { useAuth } from "../../hooks/useAuth";
import { View, Text } from "react-native";

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
          headerTitle: "",
          // headerRight: () => (
          //   <FontAwesome.Button
          //     name="plus"
          //     backgroundColor="#F9F9F9"
          //     color="#000"
          //   />
          // ),
          headerBackground(props) {
            return (
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingHorizontal: 20,
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "#F9F9F9",
                  height: 130,
                }}
              >
                <Text>Seus Pets</Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <FontAwesome.Button
                    name="plus"
                    backgroundColor="#F9F9F9"
                    color="#000"
                  />
                  <Text>Novo pet</Text>
                </View>
              </View>
            );
          },
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
