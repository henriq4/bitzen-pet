import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Redirect, router, useRootNavigationState } from "expo-router";
import { TextInput } from "../../components/Form/TextInput";
import { Button } from "../../components/Form/Button";

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
      <TextInput />
      <TextInput />

      <Button
        title="Entrar"
        onPress={() => {
          login();
          router.replace("/");
        }}
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
