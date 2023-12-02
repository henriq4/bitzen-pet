import { ImageBackground, TouchableOpacity, View } from "react-native";
import { Text } from "native-base";
import { router, useLocalSearchParams } from "expo-router";
import { Header } from "../../components/Header";
import { StyleSheet } from "react-native";
import { useAuth } from "../../hooks/useAuth";

export default function UserData() {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <Header title="Meus dados" />

      <View style={styles.content}>
        <ImageBackground
          source={{ uri: user?.profile_photo_url }}
          borderRadius={999}
          style={styles.avatar}
        />

        <View style={{ height: 60 }} />

        <View style={styles.infoItem}>
          <Text fontSize="14px" color="#8C8C8C">
            Nome
          </Text>
          <Text fontSize="14px" color="#404040" marginRight="20px">
            {user?.name}
          </Text>
        </View>

        <View style={styles.infoSpacer} />

        <View style={styles.infoItem}>
          <Text fontSize="14px" color="#8C8C8C">
            Email
          </Text>
          <Text fontSize="14px" color="#404040" marginRight="20px">
            {user?.email}
          </Text>
        </View>

        <View style={styles.infoSpacer} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  avatar: {
    height: 80,
    width: 80,
    display: "flex",
    justifyContent: "flex-end",
  },
  content: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  infoItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  infoSpacer: {
    marginTop: 12,
    marginBottom: 20,
    height: 1,
    width: "100%",
    backgroundColor: "#E6E6E6",
  },
});
