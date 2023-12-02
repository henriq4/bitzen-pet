import Svg, { Path, SvgProps } from "react-native-svg";

export const CloseIcon = ({ ...rest }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...rest}>
    <Path
      d="M6 18L18 6M6 6L18 18"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
