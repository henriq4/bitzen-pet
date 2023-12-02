import { Container, Text } from "native-base";
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { UserIcon } from "../../components/Icons/UserIcon";
import { ArrowIosRightIcon } from "../../components/Icons/ArrowIosRightIcon";
import { LogoutIcon } from "../../components/Icons/LogoutIcon";
import { useAuth } from "../../hooks/useAuth";
import { router } from "expo-router";

export default function Account() {
  const { signOut } = useAuth();

  return (
    <View style={styles.container}>
      <Container
        display="flex"
        flexDir="row"
        width="full"
        alignItems="flex-end"
        justifyContent="start"
        paddingBottom="30px"
        height={200}
      >
        <ImageBackground
          source={{ uri: "https://i.ibb.co/5FT3xbT/1.png" }}
          borderRadius={999}
          style={styles.avatar}
        />

        <Container
          rounded="full"
          height="64px"
          display="flex"
          alignItems="start"
          justifyContent="space-around"
          marginLeft="16px"
        >
          <Text fontSize="20px" color="#262626">
            Ana Maria
          </Text>
          <Text fontSize="14px" color="#8C8C8C">
            Curitiba, PR
          </Text>
        </Container>
      </Container>

      <View style={styles.infoContainer}>
        <TouchableOpacity
          style={styles.infoItem}
          onPress={() => {
            router.push("/(user)/user-data");
          }}
        >
          <View style={styles.infoItemContent}>
            <View style={{ width: 16 }} />
            <UserIcon />
            <View style={{ width: 16 }} />

            <Text>Meus dados</Text>
          </View>

          <ArrowIosRightIcon />
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.infoItem} onPress={signOut}>
          <View style={styles.infoItemContent}>
            <View style={{ width: 16 }} />
            <LogoutIcon />
            <View style={{ width: 16 }} />

            <Text>Sair do aplicativo</Text>
          </View>
        </TouchableOpacity>
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
    justifyContent: "center",
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: "100%",
    height: "60%",
    backgroundColor: "#FFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 48,
  },
  spacer: {
    height: 16,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#E6E6E6",
    marginVertical: 16,
  },
  avatar: {
    height: 64,
    width: 64,
    display: "flex",
    justifyContent: "flex-end",
  },
  infoItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  infoItemContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
