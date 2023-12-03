import { useState } from "react";

export function useDatePicker() {
  const [date, setDate] = useState<Date>(new Date());
  const [show, setShow] = useState<boolean>(false);

  const onDataChange = (_: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setShow(false);
  };

  return {
    date,
    show,
    onDataChange,
    setShow,
  };
}
