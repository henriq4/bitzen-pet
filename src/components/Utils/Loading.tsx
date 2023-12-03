import { Center, Spinner } from "native-base";

interface ILoadingProps {
  accessibilityLabel: string;
}

export function Loading({ accessibilityLabel }: ILoadingProps) {
  return (
    <Center flex="1">
      <Spinner size="lg" accessibilityLabel={accessibilityLabel} />
    </Center>
  );
}
