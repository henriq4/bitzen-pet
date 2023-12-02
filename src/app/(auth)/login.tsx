import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { TextInput } from "../../components/Form/TextInput";
import { Button } from "../../components/Form/Button";
import { useForm, Controller } from "react-hook-form";
import { signInCredentials } from "../../contexts/AuthContext";
import { router } from "expo-router";

export default function Login() {
  const { signIn } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<signInCredentials>();

  async function handleLogin(data: signInCredentials) {
    console.log(data);
    await signIn(data);
    router.push("/");
  }

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="email"
        rules={{
          required: "Email obrigatório",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Insira um email válido",
          },
        }}
        render={({ field: { onChange } }) => (
          <TextInput
            placeholder="Email"
            onChangeText={onChange}
            errorMessage={errors.email?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        rules={{
          required: "Senha obrigatória",
        }}
        render={({ field: { onChange } }) => (
          <TextInput
            secureTextEntry
            placeholder="Senha"
            onChangeText={onChange}
            errorMessage={errors.password?.message}
          />
        )}
      />

      <Button
        title={isLoading ? "loading" : "ntrar"}
        onPress={handleSubmit(handleLogin)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});
