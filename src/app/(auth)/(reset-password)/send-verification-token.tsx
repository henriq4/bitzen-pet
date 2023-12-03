import { Text } from "native-base";
import { StyleSheet, ToastAndroid, View } from "react-native";
import { Header } from "../../../components/Header";
import { Controller, useForm } from "react-hook-form";

import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";

import { TextInput } from "../../../components/Form/TextInput";
import { router } from "expo-router";
import {
  sendResetPasswordConfirmationToken,
  sendResetPasswordEmail,
} from "../../../services/userService";
import { Button } from "../../../components/Form/Button";
import { UserResetPasswordStore } from "../../../store/userResetPasswordStore";
import { TouchableOpacity } from "react-native";

const sendVerificationTokenSchema = yup.object({
  token: yup.string().required("Insira o token"),
});

interface SendVerificationTokenFormData {
  token: string;
}

export default function SendVerificationToken() {
  const { selectUserToken, clearTokenStore, userEmail } =
    UserResetPasswordStore();

  const {
    control,
    handleSubmit,
    formState: { errors, isLoading, isSubmitting },
  } = useForm({
    resolver: yupResolver(sendVerificationTokenSchema),
  });

  async function handleResetPassword(data: SendVerificationTokenFormData) {
    try {
      await sendResetPasswordConfirmationToken({
        email: userEmail[0],
        token: data.token,
      });

      clearTokenStore();
      selectUserToken(data.token);

      router.push("/(auth)/(reset-password)/reset-password");
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
          Confira o seu email
        </Text>

        <View style={styles.spacer} />

        <Text color="#8C8C8C" textAlign="center">
          Insira nos campos abaixo o código que enviamos para você no seu
          endereço de e-mail.
        </Text>

        <View style={styles.spacer} />
        <View style={styles.spacer} />

        <Controller
          control={control}
          name="token"
          render={({ field: { onChange } }) => (
            <TextInput
              placeholder="Token de verificação"
              onChangeText={onChange}
              errorMessage={errors.token?.message}
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

        <View style={styles.spacer} />

        <TouchableOpacity
          onPress={async () => {
            await sendResetPasswordEmail(userEmail[0]);
          }}
          style={{ display: "flex", flexDirection: "row", gap: 2 }}
        >
          <Text color="#8C8C8C">Não recebeu o código?</Text>
          <Text color="#183E4B">Reenviar</Text>
        </TouchableOpacity>
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
