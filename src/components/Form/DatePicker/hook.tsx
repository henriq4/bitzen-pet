import { useState } from "react";

export function useDatePicker() {
  const [date, setDate] = useState<Date>(new Date());
  const [show, setShow] = useState<boolean>(false);

  const [dataChanged, setDataChanged] = useState<boolean>(false);

  const onDataChange = (_: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setDataChanged(true);
    setDate(currentDate);
    setShow(false);
  };

  return {
    date,
    show,
    onDataChange,
    setShow,
    dataChanged,
  };
}
