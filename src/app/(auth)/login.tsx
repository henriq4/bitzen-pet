import { StyleSheet, View } from "react-native";
import { useAuth } from "../../hooks/useAuth";
import { TextInput } from "../../components/Form/TextInput";
import { Button } from "../../components/Form/Button";
import { useForm, Controller } from "react-hook-form";
import { signInCredentials } from "../../contexts/AuthContext";
import { router } from "expo-router";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ArrowIosRightIcon } from "../../components/Icons/ArrowIosRightIcon";
import { PetBrandIcon } from "../../components/Icons/PetBrandIcon";
import { Container, Text } from "native-base";

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
      <Container
        display="flex"
        alignItems="center"
        justifyContent="center"
        height={277}
      >
        <Container
          width={106}
          height={106}
          bgColor="#FFF"
          rounded="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <PetBrandIcon width={56} height={56} />
        </Container>

        <Text marginTop="16px" color="#FFF" fontSize="20px">
          Bitzen Pet
        </Text>
      </Container>

      <View style={styles.formContainer}>
        <Text fontSize="20px">Que bom te ver por aqui!</Text>

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange } }) => (
            <TextInput
              placeholder="Email"
              onChangeText={onChange}
              errorMessage={errors.email?.message}
              marginTop="42px"
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

        <View style={styles.forgotPassword}>
          <Text>Esqueceu sua senha?</Text>
        </View>

        <Button
          marginTop="24px"
          isLoading={isLoading}
          title="Entrar"
          onPress={handleSubmit(handleLogin)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0998B2", // #00B8C4, #197EA0
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
    height: "50%",
    backgroundColor: "#FFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 48,
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
});
