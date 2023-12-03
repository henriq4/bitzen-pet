import { Input, IInputProps, FormControl } from "native-base";

type TextInputProps = IInputProps & {
  errorMessage?: string;
};

export function TextInput({ errorMessage, ...rest }: TextInputProps) {
  const isInputInvalid = !!errorMessage || rest.isInvalid;

  return (
    <FormControl isInvalid={isInputInvalid}>
      <Input
        borderColor="#8C8C8C"
        fontSize="14px"
        placeholderTextColor="#8C8C8C"
        isInvalid={isInputInvalid}
        _invalid={{
          borderColor: "red.500",
        }}
        {...rest}
      />

      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  );
}
