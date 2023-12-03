import Svg, { G, Path, Defs, ClipPath, Rect, SvgProps } from "react-native-svg";

export const FacebookIcon = ({ ...rest }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...rest}>
    <G clipPath="url(#clip0_641_907)">
      <Path
        d="M21.8719 0.905518H2.13001C1.45381 0.905518 0.90564 1.45369 0.90564 2.12989V21.8718C0.90564 22.548 1.45381 23.0961 2.13001 23.0961H21.8719C22.5481 23.0961 23.0963 22.548 23.0963 21.8718V2.12989C23.0963 1.45369 22.5481 0.905518 21.8719 0.905518Z"
        fill="#3D5A98"
      />
      <Path
        d="M16.215 23.0943V14.5012H19.0987L19.53 11.1524H16.215V9.01494C16.215 8.04557 16.485 7.38369 17.8743 7.38369H19.6481V4.38369C18.7892 4.29418 17.926 4.25161 17.0625 4.25619C14.5087 4.25619 12.75 5.81244 12.75 8.68307V11.1524H9.86621V14.5012H12.75V23.0943H16.215Z"
        fill="white"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_641_907">
        <Rect width={24} height={24} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
