import { IButtonProps, Button as NativeBaseButton, Text } from "native-base";

type ButtonProps = IButtonProps & {
  title: string;
};

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <NativeBaseButton bg="#183E4B" w="full" {...rest}>
      <Text color="#FFF">{title}</Text>
    </NativeBaseButton>
  );
}
