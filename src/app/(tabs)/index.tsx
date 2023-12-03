import { FlatList, ToastAndroid, View } from "react-native";

import { Button, Text } from "native-base";
import { StyleSheet } from "react-native";
import { AddRoundedIcon } from "../../components/Icons/AddRoundedIcon";
import { PetCard } from "../../components/PetCard";
import { router } from "expo-router";
import { SearchBar } from "../../components/Form/SearchBar";
import { useEffect, useState } from "react";
import { fetchPets } from "../../services/petService";
import { PetRaw } from "../../models/Pet";
import { Loading } from "../../components/Utils/Loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pets, setPets] = useState<PetRaw[]>([]);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      try {
        const pets = await fetchPets();
        setPets(pets);
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
    <View style={styles.container}>
      <View
        style={{
          paddingTop: 20,
          display: "flex",
          flexDirection: "row",
          paddingHorizontal: 20,
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#F9F9F9",
          height: 130,
        }}
      >
        <Text fontSize="20px" color="#262626">
          Seus Pets
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button
            leftIcon={<AddRoundedIcon />}
            colorScheme="white"
            onPress={() => {
              router.push("/(pet)/create");
            }}
          >
            <Text>Novo pet</Text>
          </Button>
        </View>
      </View>

      {isLoading ? (
        <Loading accessibilityLabel="Carregando pets" />
      ) : (
        <FlatList
          ListHeaderComponent={<SearchBar placeholder="Pesquisar um pet" />}
          style={styles.contentContainer}
          data={pets}
          renderItem={({ item: pet }) => (
            <PetCard
              key={pet.id}
              id={pet.id}
              image_url={pet.image_url}
              name={pet.name}
              user_id={pet.user_id}
            />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1,
  },
  contentContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
});
