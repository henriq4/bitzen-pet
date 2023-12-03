import { Center, Spinner } from "native-base";

interface ILoadingProps {
  accessibilityLabel: string;
}

export function Loading({ accessibilityLabel }: ILoadingProps) {
  return (
    <Center flex="1" display="flex" alignItems="center" justifyContent="center">
      <Spinner size="lg" accessibilityLabel={accessibilityLabel} />
    </Center>
  );
}
