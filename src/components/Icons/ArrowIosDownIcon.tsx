import Svg, { Path, SvgProps } from "react-native-svg";

export const ArrowIosDownIcon = ({ ...rest }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...rest}>
    <Path
      d="M19.5 8.25L12 15.75L4.5 8.25"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
