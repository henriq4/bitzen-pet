import { Text } from "native-base";
import { ToastAndroid, StyleSheet, View, TouchableOpacity } from "react-native";
import {} from "react-native";
import { CameraIcon } from "../../Icons/CameraIcon";
import { MutableRefObject, Ref, useImperativeHandle, useState } from "react";

interface ImagePickerProps {
  onPress: () => void;
}

export function ImagePicker({ onPress }: ImagePickerProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <CameraIcon />
      <Text marginTop="16px" fontSize="16px" color="#595959" textAlign="center">
        Clique para adicionar uma imagem
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 262,
    paddingHorizontal: 80,
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#B3B3B3",
    borderBlockColor: "#B3B3B3",
    backgroundColor: "#EDEDED",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
