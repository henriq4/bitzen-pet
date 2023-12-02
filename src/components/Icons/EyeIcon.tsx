import Svg, { Path, SvgProps } from "react-native-svg";

export const EyeIcon = ({ ...rest }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...rest}>
    <Path
      d="M2.03601 12.322C1.967 12.1146 1.967 11.8904 2.03601 11.683C3.42301 7.51 7.36001 4.5 12 4.5C16.638 4.5 20.573 7.507 21.963 11.678C22.033 11.885 22.033 12.109 21.963 12.317C20.577 16.49 16.64 19.5 12 19.5C7.36201 19.5 3.42601 16.493 2.03601 12.322Z"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12Z"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
