import { Button, TextInput, StyleSheet, View } from "react-native";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Redirect, router, useRootNavigationState } from "expo-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { onLogin } = useAuth();

  const login = async () => {
    const result = await onLogin({ email, password });
    if (result && result.error) {
      alert("error");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="email"
        onChangeText={(text: string) => setEmail(text)}
        value={email}
      />
      <TextInput
        placeholder="senha"
        secureTextEntry={true}
        onChangeText={(text: string) => setPassword(text)}
        value={password}
      />
      <Button
        onPress={() => {
          login();
          router.replace("/");
        }}
        title="signin"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
