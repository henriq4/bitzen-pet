import Svg, { Path, SvgProps } from "react-native-svg";

export const ArrowIosRightIcon = ({ ...rest }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...rest}>
    <Path
      d="M8.25 4.5L15.75 12L8.25 19.5"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
