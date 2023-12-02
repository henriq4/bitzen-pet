import { ImageBackground, StyleSheet } from "react-native";
import { Text } from "native-base";

export function PetCard() {
  return (
    <ImageBackground
      source={{ uri: "https://i.ibb.co/5FT3xbT/1.png" }}
      borderRadius={16}
      style={styles.cardContent}
    >
      <Text fontSize="24px" fontWeight="bold" color="#FFF">
        Leona
      </Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  cardContent: {
    height: 344,
    display: "flex",
    justifyContent: "flex-end",
    padding: 24,
    marginVertical: 12,
  },
});
