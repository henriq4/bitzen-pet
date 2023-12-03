import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Input, ScrollView, Text, TextArea, ZStack } from "native-base";
import { router, useLocalSearchParams } from "expo-router";
import { Header } from "../../components/Header";
import { DatePicker } from "../../components/Form/DatePicker";
import { TextInput } from "../../components/Form/TextInput";
import { CalendarIcon } from "../../components/Icons/CalendarIcon";
import { ImagePicker } from "../../components/Form/ImagePicker";
import { TextAreaInput } from "../../components/Form/TextAreaInput";
import { Button } from "../../components/Form/Button";

export default function PetCreate() {
  return (
    <ScrollView style={styles.container}>
      <Header title="" />

      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.subtitle}>Foto</Text>

          <ImagePicker />
        </View>

        <Text style={styles.subtitle}>Informações</Text>
        <View style={styles.infoContainer}>
          <TextInput placeholder="Nome" />
          <View style={{ height: 16 }} />
          <TextInput placeholder="Cor" />
          <View style={{ height: 16 }} />

          <DatePicker />
          <View style={{ height: 16 }} />

          <TextAreaInput placeholder="Sobre o pet" />
        </View>

        <Button marginTop="20px" title="Criar" />

        <View style={{ height: 40 }} />
      </View>
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
    paddingVertical: 32,
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
