import { useState } from "react";
import { ToastAndroid } from "react-native";
import * as ExpoImagePicker from "expo-image-picker";

export function usePickImage() {
  const [image, setImage] = useState<ExpoImagePicker.ImagePickerAsset>();

  const pickImage = async () => {
    const { assets, canceled } = await ExpoImagePicker.launchImageLibraryAsync({
      mediaTypes: ExpoImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (canceled) {
      ToastAndroid.show("Imagem cancelada", ToastAndroid.SHORT);
    }

    if (!assets) return;

    setImage(assets[0]);
  };

  return { image, pickImage };
}
