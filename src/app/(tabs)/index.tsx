import { ImageBackground, View } from "react-native";

import { Button, Text, Input, Icon, ScrollView } from "native-base";
import { StyleSheet } from "react-native";
import { AddRoundedIcon } from "../../components/Icons/AddRoundedIcon";
import { SearchIcon } from "../../components/Icons/SearchIcon";
import { PetCard } from "../../components/PetCard";

export default function TabOneScreen() {
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
          <Button leftIcon={<AddRoundedIcon />} colorScheme="white">
            <Text>Novo pet</Text>
          </Button>
        </View>
      </View>

      <ScrollView style={styles.contentContainer}>
        <View style={styles.searchBar}>
          <SearchIcon />
          <Text marginLeft="12px" color="#B3B3B3">
            Pesquisar um pet
          </Text>
        </View>

        <View style={{ height: 24 }} />

        <PetCard />
        <PetCard />
      </ScrollView>
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
  searchBar: {
    backgroundColor: "#F9F9F9",
    height: 48,
    borderColor: "#E6E6E6",
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
