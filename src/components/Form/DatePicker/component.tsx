import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "native-base";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useDatePicker } from "./hook";
import { CalendarIcon } from "../../Icons/CalendarIcon";

export function DatePicker() {
  const { date, show, onDataChange, setShow } = useDatePicker();

  return (
    <>
      {show && (
        <DateTimePicker
          value={new Date()}
          mode="date"
          display="default"
          onChange={onDataChange}
        />
      )}

      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          setShow(true);
        }}
      >
        <Text color="#8C8C8C">Ola</Text>
        <CalendarIcon />
      </TouchableOpacity>
    </>
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
