import { Text } from "native-base";
import { StyleSheet, ToastAndroid, View } from "react-native";
import { Header } from "../../../components/Header";
import { Controller, useForm } from "react-hook-form";

import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";

import { TextInput } from "../../../components/Form/TextInput";
import { router } from "expo-router";
import { resetPassword } from "../../../services/userService";
import { Button } from "../../../components/Form/Button";
import { UserResetPasswordStore } from "../../../store/userResetPasswordStore";

const resetPasswordSchema = yup.object({
  password: yup.string().required("Senha obrigatória"),
  password_confirmation: yup
    .string()
    .required("Confirmação de senha obrigatória"),
});

interface SendVerificationTokenFormData {
  password: string;
  password_confirmation: string;
}

export default function ResetPassword() {
  const { clearTokenStore, userEmail, userToken } = UserResetPasswordStore();

  const {
    control,
    handleSubmit,
    formState: { errors, isLoading, isSubmitting },
  } = useForm({
    resolver: yupResolver(resetPasswordSchema),
  });

  async function handleResetPassword(data: SendVerificationTokenFormData) {
    try {
      await resetPassword({
        email: userEmail[0],
        token: userToken[0],
        password: data.password,
        password_confirmation: data.password_confirmation,
      });

      clearTokenStore();

      router.push("/(auth)/(reset-password)/succes-redefinition");
    } catch (error: any) {
      if (error instanceof Error) {
        ToastAndroid.show(error.message, ToastAndroid.SHORT);
      }
    }
  }

  return (
    <View style={styles.container}>
      <Header title="" />
      <View style={styles.contentContainer}>
        <Text fontSize="20px" color="#262626">
          Crie uma nova senha
        </Text>

        <View style={styles.spacer} />

        <Text color="#8C8C8C" textAlign="center">
          Crie uma nova senha de acesso à sua conta.
        </Text>

        <View style={styles.spacer} />
        <View style={styles.spacer} />

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

        <View style={styles.spacer} />

        <Controller
          control={control}
          name="password_confirmation"
          render={({ field: { onChange } }) => (
            <TextInput
              secureTextEntry
              placeholder="Confirmar nova senha"
              onChangeText={onChange}
              errorMessage={errors.password_confirmation?.message}
            />
          )}
        />

        <View style={styles.spacer} />
        <View style={styles.spacer} />

        <Button
          isLoading={isLoading || isSubmitting}
          title="Refinir senha"
          onPress={handleSubmit(handleResetPassword)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  spacer: {
    height: 16,
  },
});
