import { Input, IInputProps, FormControl } from "native-base";

type TextInputProps = IInputProps & {
  errorMessage?: string;
};

export function TextInput({ errorMessage, ...rest }: TextInputProps) {
  const isInputInvalid = !!errorMessage || rest.isInvalid;

  return (
    <FormControl isInvalid={isInputInvalid}>
      <Input
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
