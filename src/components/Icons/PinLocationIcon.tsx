import Svg, { Path, SvgProps } from "react-native-svg";

export const PinLocationIcon = ({ ...rest }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...rest}>
    <Path
      d="M15.5 10.5C15.5 11.2956 15.1839 12.0587 14.6213 12.6213C14.0587 13.1839 13.2956 13.5 12.5 13.5C11.7044 13.5 10.9413 13.1839 10.3787 12.6213C9.81607 12.0587 9.5 11.2956 9.5 10.5C9.5 9.70435 9.81607 8.94129 10.3787 8.37868C10.9413 7.81607 11.7044 7.5 12.5 7.5C13.2956 7.5 14.0587 7.81607 14.6213 8.37868C15.1839 8.94129 15.5 9.70435 15.5 10.5Z"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M20 10.5C20 17.642 12.5 21.75 12.5 21.75C12.5 21.75 5 17.642 5 10.5C5 8.51088 5.79018 6.60322 7.1967 5.1967C8.60322 3.79018 10.5109 3 12.5 3C14.4891 3 16.3968 3.79018 17.8033 5.1967C19.2098 6.60322 20 8.51088 20 10.5Z"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
