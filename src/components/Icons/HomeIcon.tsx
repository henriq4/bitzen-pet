import Svg, { Path, SvgProps } from "react-native-svg";

export const HomeIcon = ({ ...rest }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...rest}>
    <Path
      d="M2.64 12.1365L11.2358 3.53971C11.6582 3.11827 12.3418 3.11827 12.7632 3.53971L21.36 12.1365M4.8 9.97651V19.6965C4.8 20.2927 5.28384 20.7765 5.88 20.7765H9.84V16.0965C9.84 15.5004 10.3238 15.0165 10.92 15.0165H13.08C13.6762 15.0165 14.16 15.5004 14.16 16.0965V20.7765H18.12C18.7162 20.7765 19.2 20.2927 19.2 19.6965V9.97651M8.4 20.7765H16.32"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
