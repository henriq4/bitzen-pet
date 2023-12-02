import Svg, { Path, SvgProps } from "react-native-svg";

export const ArrowLeftIcon = ({ ...rest }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...rest}>
    <Path
      d="M10.5 19.5L3 12M3 12L10.5 4.5M3 12H21"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
