import Svg, { Path, SvgProps } from "react-native-svg";

export const ArrowRightIcon = ({ ...rest }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...rest}>
    <Path
      d="M13.5 4.5L21 12M21 12L13.5 19.5M21 12H3"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
