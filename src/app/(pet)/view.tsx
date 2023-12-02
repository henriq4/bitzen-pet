import { TouchableOpacity, View } from "react-native";
import { Text } from "native-base";
import { router, useLocalSearchParams } from "expo-router";

export default function PetView() {
  const { id } = useLocalSearchParams();

  console.log(id);

  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity
        onPress={() => {
          router.back();
        }}
      >
        <Text>Ola</Text>
      </TouchableOpacity>
    </View>
  );
}
