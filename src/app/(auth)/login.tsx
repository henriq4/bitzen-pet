import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { TextInput } from "../../components/Form/TextInput";
import { Button } from "../../components/Form/Button";
import { useForm, Controller } from "react-hook-form";
import { signInCredentials } from "../../contexts/AuthContext";
import { router } from "expo-router";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const signInSchema = yup.object({
  email: yup.string().email("Email inválido").required("Email obrigatório"),
  password: yup.string().required("Senha obrigatória"),
});

export default function Login() {
  const { signIn } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<signInCredentials>({
    resolver: yupResolver(signInSchema),
  });

  async function handleLogin(data: signInCredentials) {
    await signIn(data);
    router.push("/");
  }

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="email"
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
