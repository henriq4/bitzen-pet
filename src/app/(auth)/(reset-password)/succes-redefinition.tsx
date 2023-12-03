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
import { SuccessIcon } from "../../../components/Icons/SuccessIcon";

export default function SendVerificationToken() {
  return (
    <View style={styles.container}>
      <Header title="" />
      <View style={styles.contentContainer}>
        <SuccessIcon />

        <View style={styles.spacer} />

        <Text fontSize="20px" color="#262626">
          Senha redefinida com sucesso!
        </Text>

        <View style={styles.spacer} />

        <Button
          title="Voltar para login"
          onPress={() => {
            router.push("/(auth)/login");
          }}
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
    height: 48,
  },
});
