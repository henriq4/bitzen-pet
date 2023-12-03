import React, { useEffect } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "native-base";
import { useDatePicker } from "./hook";
import { CalendarIcon } from "../../Icons/CalendarIcon";

interface DatePickerProps {
  label: string;
  onPress: () => void;
}

export function DatePicker({ label, onPress }: DatePickerProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text color="#8C8C8C">{label}</Text>
      <CalendarIcon />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 48,
    width: "100%",
    borderColor: "#8C8C8C",
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
