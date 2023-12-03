import {
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  View,
  ScrollView,
  ToastAndroid,
} from "react-native";
import { useAuth } from "../../hooks/useAuth";
import { TextInput } from "../../components/Form/TextInput";
import { Button } from "../../components/Form/Button";
import { useForm, Controller } from "react-hook-form";
import { signUpCredentials } from "../../contexts/AuthContext";
import { router } from "expo-router";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ArrowIosRightIcon } from "../../components/Icons/ArrowIosRightIcon";
import { PetBrandIcon } from "../../components/Icons/PetBrandIcon";
import { Checkbox, Container, Text } from "native-base";
import { Header } from "../../components/Header";
import { useState } from "react";
import { FacebookIcon } from "../../components/Icons/FacebookIcon";
import { GoogleIcon } from "../../components/Icons/GoogleIcon";

const signUpSchema = yup.object({
  name: yup.string().required("Nome obrigatório"),
  document: yup.string().required("CPF obrigatório"),
  phone_number: yup.string().required("Telefone obrigatório"),
  email: yup.string().email("Email inválido").required("Email obrigatório"),
  password: yup.string().required("Senha obrigatória"),
  password_confirmation: yup
    .string()
    .required("Confirmação de senha obrigatória"),
});

export default function SignUp() {
  const [isTermsChecked, setIsTermsChecked] = useState<boolean>(false);

  const { signUp } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors, isLoading, isSubmitting },
  } = useForm<signUpCredentials>({
    resolver: yupResolver(signUpSchema),
  });

  async function handleLogin(data: signUpCredentials) {
    if (!isTermsChecked) {
      ToastAndroid.show(
        "Você precisa concordar com os termos de uso e a política de privacidade",
        ToastAndroid.SHORT
      );

      return;
    }

    try {
      await signUp(data);
      router.push("/");
    } catch (error: any) {
      if (error instanceof Error) {
        ToastAndroid.show(error.message, ToastAndroid.SHORT);
      }
    }
  }

  return (
    <ScrollView style={styles.container}>
      <Header title="Cadastro" />

      <View style={styles.formContainer}>
        <Text fontSize="20px" alignSelf="flex-start">
          Cadastre-se gratuitamente
        </Text>

        <Controller
          control={control}
          name="name"
          render={({ field: { onChange } }) => (
            <TextInput
              placeholder="Seu nome"
              onChangeText={onChange}
              errorMessage={errors.name?.message}
              marginTop="24px"
            />
          )}
        />

        <View style={styles.spacer} />

        <Controller
          control={control}
          name="document"
          render={({ field: { onChange } }) => (
            <TextInput
              placeholder="CPF"
              onChangeText={onChange}
              errorMessage={errors.document?.message}
            />
          )}
        />

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

        <Controller
          control={control}
          name="phone_number"
          render={({ field: { onChange } }) => (
            <TextInput
              placeholder="Telefone"
              onChangeText={onChange}
              errorMessage={errors.phone_number?.message}
            />
          )}
        />

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
              placeholder="Confirmar senha"
              onChangeText={onChange}
              errorMessage={errors.password_confirmation?.message}
            />
          )}
        />

        <View style={styles.spacer} />

        <View>
          <Checkbox
            value="true"
            onChange={() => {
              setIsTermsChecked(!isTermsChecked);
            }}
          >
            <Text fontSize="14px" color="#8C8C8C" lineHeight="18px">
              Li e concordo com os{" "}
              <Text
                textDecorationLine="underline"
                fontSize="14px"
                color="#183E4B"
                fontWeight="bold"
              >
                Termos de uso
              </Text>{" "}
              e a{" "}
              <Text
                textDecorationLine="underline"
                fontSize="14px"
                color="#183E4B"
                fontWeight="bold"
              >
                Política de privacidade
              </Text>{" "}
              do aplicativo Patada.
            </Text>
          </Checkbox>
        </View>

        <Button
          marginTop="24px"
          isLoading={isLoading || isSubmitting}
          title="Criar conta"
          onPress={handleSubmit(handleLogin)}
        />

        <View style={styles.alternativeSignUp}>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={{ height: 1, flex: 1, backgroundColor: "#E3E3E3" }} />
            <Text paddingX="12px" fontSize="14px" color="#737373">
              ou se cadastre com
            </Text>
            <View style={{ height: 1, flex: 1, backgroundColor: "#E3E3E3" }} />
          </TouchableOpacity>

          <View style={{ height: 16 }} />

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                height: 40,
                borderWidth: 1,
                borderColor: "#CCCCCC",
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => {
                ToastAndroid.show(
                  "Método não implementado",
                  ToastAndroid.SHORT
                );
              }}
            >
              <GoogleIcon />
            </TouchableOpacity>

            <View style={{ width: 16 }} />

            <TouchableOpacity
              style={{
                flex: 1,
                height: 40,
                borderWidth: 1,
                borderColor: "#CCCCCC",
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => {
                ToastAndroid.show(
                  "Método não implementado",
                  ToastAndroid.SHORT
                );
              }}
            >
              <FacebookIcon />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.goToSignUp}>
          <Text color="#737373">
            Já possui uma conta?
            <Text color="#183E4B" fontWeight="bold">
              {" "}
              Entrar
            </Text>
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: "100%",
    backgroundColor: "#FFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 24,
  },
  spacer: {
    height: 16,
  },
  forgotPassword: {
    width: "100%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  goToSignUp: {
    marginTop: 12,
  },
  alternativeSignUp: {
    marginTop: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
