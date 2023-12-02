import {
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { useAuth } from "../../hooks/useAuth";
import { TextInput } from "../../components/Form/TextInput";
import { Button } from "../../components/Form/Button";
import { useForm, Controller } from "react-hook-form";
import {
  signInCredentials,
  signUpCredentials,
} from "../../contexts/AuthContext";
import { router } from "expo-router";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ArrowIosRightIcon } from "../../components/Icons/ArrowIosRightIcon";
import { PetBrandIcon } from "../../components/Icons/PetBrandIcon";
import { Container, Text } from "native-base";
import { Header } from "../../components/Header";

const signInSchema = yup.object({
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
  const { signUp } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<signUpCredentials>({
    resolver: yupResolver(signInSchema),
  });

  async function handleLogin(data: signUpCredentials) {
    // await SignUp(data);
    router.push("/");
  }

  return (
    <View style={styles.container}>
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
              secureTextEntry
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
              secureTextEntry
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
              secureTextEntry
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

        <Button
          marginTop="24px"
          isLoading={isLoading}
          title="Criar conta"
          onPress={handleSubmit(handleLogin)}
        />

        <TouchableOpacity style={styles.goToSignUp}>
          <Text>
            Já tem uma conta?
            <Text color="#183E4B" fontWeight="bold">
              {" "}
              Entrar
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
});
