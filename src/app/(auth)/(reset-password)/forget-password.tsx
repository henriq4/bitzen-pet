import { Text } from "native-base";
import { StyleSheet, ToastAndroid, View } from "react-native";
import { Header } from "../../../components/Header";
import { Controller, useForm } from "react-hook-form";

import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";

import { TextInput } from "../../../components/Form/TextInput";
import { router } from "expo-router";
import { sendResetPasswordEmail } from "../../../services/userService";
import { Button } from "../../../components/Form/Button";
import { UserResetPasswordStore } from "../../../store/userResetPasswordStore";
import { PasswordIcon } from "../../../components/Icons/PasswordIcon";

const resetPasswordSchema = yup.object({
  email: yup.string().email("Email inválido").required("Email obrigatório"),
});

interface ResetPasswordFormData {
  email: string;
}

export default function ForgetPassword() {
  const { selectUserEmail, clearEmailStore } = UserResetPasswordStore();

  const {
    control,
    handleSubmit,
    formState: { errors, isLoading, isSubmitting },
  } = useForm({
    resolver: yupResolver(resetPasswordSchema),
  });

  async function handleResetPassword(data: ResetPasswordFormData) {
    try {
      await sendResetPasswordEmail(data.email);

      clearEmailStore();
      selectUserEmail(data.email);

      router.push("/(auth)/(reset-password)/send-verification-token");
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
        <View style={styles.iconContainer}>
          <PasswordIcon />
        </View>

        <View style={styles.spacer} />
        <View style={styles.spacer} />

        <Text color="#262626" fontSize="20px">
          Esqueceu a sua senha?
        </Text>

        <View style={styles.spacer} />

        <Text color="#8C8C8C" textAlign="center">
          Vamos te ajudar nisso! Primeiro, digite seu e-mail cadastrado ao criar
          a sua conta.
        </Text>

        <View style={styles.spacer} />
        <View style={styles.spacer} />

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

        <View style={styles.spacer} />
        <View style={styles.spacer} />

        <Button
          isLoading={isLoading || isSubmitting}
          title="Próximo"
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
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 999,
    backgroundColor: "#183E4B",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  spacer: {
    height: 16,
  },
});
