import Svg, { Circle, Path, SvgProps } from "react-native-svg";

export const SuccessIcon = ({ ...rest }: SvgProps) => (
  <Svg width={64} height={64} viewBox="0 0 64 64" fill="none" {...rest}>
    <Circle cx={32} cy={32} r={32} fill="#48D670" />
    <Path
      d="M22 33L30 41L42 23"
      stroke="white"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
