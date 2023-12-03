import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "native-base";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useDatePicker } from "./hook";

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
        onPress={() => {
          setShow(true);
        }}
      >
        <Text>Ola</Text>
      </TouchableOpacity>
    </>
  );
}
