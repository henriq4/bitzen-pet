import { ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "native-base";
import { Link, useRouter } from "expo-router";

export function PetCard() {
  const router = useRouter();

  return (
    <ImageBackground
      source={{ uri: "https://i.ibb.co/5FT3xbT/1.png" }}
      borderRadius={16}
      style={styles.cardContent}
    >
      <TouchableOpacity
        style={styles.cardFilter}
        onPress={() => {
          router.push("/(pet)/view");
        }}
      >
        <Text fontSize="24px" fontWeight="bold" color="#FFF">
          Leona
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  cardContent: {
    height: 344,
    display: "flex",
    justifyContent: "flex-end",
    marginVertical: 12,
  },
  cardFilter: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: 16,
    padding: 16,
    width: "100%",
    height: "100%",
  },
});
