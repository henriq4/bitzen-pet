import { ImageBackground, ScrollView, ToastAndroid, View } from "react-native";
import { Button, Text } from "native-base";
import { router, useLocalSearchParams } from "expo-router";
import { usePetStore } from "../../store/petStore";
import { StyleSheet } from "react-native";
import { Header } from "../../components/Header";
import { useEffect, useState } from "react";
import { deletePet, fetchPet } from "../../services/petService";
import { Pet } from "../../models/Pet";
import { Loading } from "../../components/Utils/Loading";
import { ConfirmationDialog } from "../../components/Form/ConfirmationDialog";

export default function PetView() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pet, setPet] = useState<Pet>();
  const { petId } = usePetStore();

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      try {
        const pet = await fetchPet(petId[0]);
        setPet(pet);
      } catch (error) {
        if (error instanceof Error) {
          ToastAndroid.show(error.message, ToastAndroid.SHORT);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Header title="" />

      {isLoading ? (
        <Loading accessibilityLabel="Carregando pet" />
      ) : (
        <View style={styles.contentContainer}>
          <View>
            <Text style={styles.subtitle}>Foto</Text>

            <ImageBackground
              source={{ uri: pet?.image_url }}
              borderRadius={16}
              style={{
                height: 262,
                marginVertical: 12,
              }}
            />
          </View>

          <Text style={styles.subtitle}>Informações</Text>
          <View style={styles.infoContainer}>
            <View style={styles.infoItem}>
              <Text color="#8C8C8C">Nome</Text>
              <Text color="#404040">{pet?.name}</Text>
            </View>

            <View style={{ height: 12 }} />

            <View style={styles.infoItem}>
              <Text color="#8C8C8C">Cor</Text>
              <Text color="#404040">{pet?.color}</Text>
            </View>

            <View style={{ height: 12 }} />

            <View style={styles.infoItem}>
              <Text color="#8C8C8C">Idade</Text>
              <Text color="#404040">{pet?.age}</Text>
            </View>

            <View style={{ height: 24 }} />

            <Text alignSelf="flex-start" color="#8C8C8C">
              Sobre o pet
            </Text>

            <View style={{ height: 12 }} />

            <View style={styles.aboutItem}>
              <Text color="#595959">
                Leona é uma gata companheira e carinhosa. Está sempre pronta
                para brincar e adora ursinhos de pelúcia.
              </Text>
            </View>
          </View>

          <Button
            onPress={() => {
              ConfirmationDialog({
                onPress: async () => {
                  await deletePet(petId[0]);
                  router.push("/(tabs)/");
                },
              });
            }}
            marginTop="20px"
            backgroundColor="red.700"
          >
            Excluir
          </Button>
          <View style={{ height: 40 }} />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
  contentContainer: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 40,
  },
  infoContainer: {
    width: "100%",
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  infoItem: {
    height: 48,
    width: "100%",
    borderBottomColor: "#E6E6E6",
    borderBottomWidth: 1,
    borderRadius: 4,
    paddingVertical: 12,
    paddingRight: 16,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  aboutItem: {
    borderRadius: 4,
    padding: 20,
    borderWidth: 1,
    borderColor: "#E6E6E6",
  },
});
