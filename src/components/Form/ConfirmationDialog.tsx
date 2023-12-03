import { Alert } from "react-native";

interface IConfirmationDialogProps {
  onPress: () => void;
}

export const ConfirmationDialog = ({ onPress }: IConfirmationDialogProps) => {
  return Alert.alert(
    "Deseja remover?",
    "Você tem certeza que deseja remover esse pet?",
    [
      {
        text: "Yes",
        onPress: onPress,
      },
      {
        text: "No",
      },
    ]
  );
};
