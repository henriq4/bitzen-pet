import { TextArea, ITextAreaProps, FormControl } from "native-base";

type TextAreaInputProps = ITextAreaProps & {
  errorMessage?: string;
};

export function TextAreaInput({ errorMessage, ...rest }: TextAreaInputProps) {
  const isInputInvalid = !!errorMessage || rest.isInvalid;

  return (
    <FormControl isInvalid={isInputInvalid}>
      <TextArea
        autoCompleteType={false}
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
