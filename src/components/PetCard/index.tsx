import { ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "native-base";
import { useRouter } from "expo-router";
import { PetRaw } from "../../models/Pet";
import { usePetStore } from "../../store/petStore";

export function PetCard({ id, image_url, name }: PetRaw) {
  const router = useRouter();

  const { selectPet } = usePetStore();

  return (
    <ImageBackground
      source={{ uri: image_url }}
      borderRadius={16}
      style={styles.cardContent}
    >
      <TouchableOpacity
        style={styles.cardFilter}
        onPress={() => {
          selectPet(id.toString());
          router.push("/(pet)/view");
        }}
      >
        <Text fontSize="24px" fontWeight="bold" color="#FFF">
          {name}
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  cardContent: {
    height: 344,
    marginVertical: 12,
  },
  cardFilter: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: 16,
    padding: 16,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
});
