import {
  Image,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import { Input, ScrollView, Text, TextArea, ZStack } from "native-base";
import { router, useLocalSearchParams } from "expo-router";
import { Header } from "../../components/Header";
import { DatePicker } from "../../components/Form/DatePicker";
import { TextInput } from "../../components/Form/TextInput";
import { CalendarIcon } from "../../components/Icons/CalendarIcon";
import { ImagePicker } from "../../components/Form/ImagePicker";
import { TextAreaInput } from "../../components/Form/TextAreaInput";
import { Button } from "../../components/Form/Button";
import * as yup from "yup";
import { CreatePet } from "../../models/Pet";
import { Controller, set, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createPet } from "../../services/petService";
import { useDatePicker } from "../../components/Form/DatePicker/hook";
import * as ExpoImagePicker from "expo-image-picker";
import { useEffect, useRef, useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { usePickImage } from "../../components/Form/ImagePicker/hook";

const createPetSchema = yup.object({
  name: yup.string().required("Nome obrigatório"),
  color: yup.string().required("Cor obrigatória"),
  description: yup.string().required("Descrição obrigatória"),
});

export default function PetCreate() {
  const { date, onDataChange, show, setShow } = useDatePicker();
  const { image, pickImage } = usePickImage();

  const {
    control,
    handleSubmit,
    formState: { errors, isLoading, isSubmitting },
  } = useForm<CreatePet>({
    resolver: yupResolver(createPetSchema),
  });

  async function handleCreate(data: CreatePet) {
    const formData = new FormData();

    if (!image) {
      ToastAndroid.show("Imagem obrigatória", ToastAndroid.SHORT);
      return;
    }

    if (!date) {
      ToastAndroid.show("Data obrigatória", ToastAndroid.SHORT);
      return;
    }

    const formattedDate: string = Intl.DateTimeFormat("en-US")
      .format(date)
      .replace(/\//g, "-");

    const imageFilename = image.uri.substring(
      image.uri.lastIndexOf("/") + 1,
      image.uri.length
    );

    const imageExtension = imageFilename.split(".")[1];

    formData.append("name", data.name);
    formData.append("color", data.color);
    formData.append("description", data.description);
    formData.append("birthdate", formattedDate);

    console.log(imageFilename);

    formData.append("image", {
      uri: image.uri,
      type: `image/${imageExtension}`,
      name: imageFilename,
    });

    try {
      await createPet(formData);
    } catch (error: any) {
      if (error instanceof Error) {
        ToastAndroid.show(error.message, ToastAndroid.SHORT);
      }
    }
  }

  return (
    <ScrollView style={styles.container}>
      <Header title="" />

      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.subtitle}>Foto</Text>

          <ImagePicker onPress={pickImage} />
        </View>

        <Text style={styles.subtitle}>Informações</Text>
        <View style={styles.infoContainer}>
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange } }) => (
              <TextInput
                placeholder="Nome"
                onChangeText={onChange}
                errorMessage={errors.name?.message}
              />
            )}
          />

          <View style={{ height: 16 }} />

          <Controller
            control={control}
            name="color"
            render={({ field: { onChange } }) => (
              <TextInput
                placeholder="Cor"
                onChangeText={onChange}
                errorMessage={errors.color?.message}
              />
            )}
          />

          <View style={{ height: 16 }} />

          {show && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={onDataChange}
            />
          )}

          <Controller
            control={control}
            name="birthdate"
            render={() => (
              <DatePicker
                label="dsa"
                onPress={() => {
                  setShow(!show);
                }}
              />
            )}
          />

          <View style={{ height: 16 }} />

          <Controller
            control={control}
            name="description"
            render={({ field: { onChange } }) => (
              <TextAreaInput
                placeholder="Sobre o pet"
                onChangeText={onChange}
                errorMessage={errors.description?.message}
              />
            )}
          />
        </View>

        <Button
          marginTop="20px"
          isLoading={isLoading || isSubmitting}
          title="Criar"
          onPress={handleSubmit(handleCreate)}
        />

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
