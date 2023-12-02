import Svg, { Path, SvgProps } from "react-native-svg";

export const MaleIcon = ({ ...rest }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...rest}>
    <Path
      d="M20.25 3H15.75C15.5511 3 15.3603 3.07902 15.2197 3.21967C15.079 3.36032 15 3.55109 15 3.75C15 3.94891 15.079 4.13968 15.2197 4.28033C15.3603 4.42098 15.5511 4.5 15.75 4.5H18.4397L14.4956 8.44406C13.0058 7.22632 11.105 6.62773 9.18631 6.77209C7.26759 6.91646 5.47775 7.79275 4.18698 9.21971C2.8962 10.6467 2.20323 12.5151 2.25139 14.4387C2.29955 16.3622 3.08517 18.1937 4.44574 19.5543C5.80632 20.9148 7.63777 21.7004 9.56131 21.7486C11.4848 21.7968 13.3533 21.1038 14.7803 19.813C16.2072 18.5222 17.0835 16.7324 17.2279 14.8137C17.3723 12.895 16.7737 10.9941 15.5559 9.50437L19.5 5.56125V8.25C19.5 8.44891 19.579 8.63968 19.7197 8.78033C19.8603 8.92098 20.0511 9 20.25 9C20.4489 9 20.6397 8.92098 20.7803 8.78033C20.921 8.63968 21 8.44891 21 8.25V3.75C21 3.55109 20.921 3.36032 20.7803 3.21967C20.6397 3.07902 20.4489 3 20.25 3ZM13.9912 18.4959C13.152 19.3348 12.0829 19.906 10.9191 20.1373C9.7553 20.3685 8.54903 20.2496 7.45283 19.7954C6.35664 19.3412 5.41972 18.5721 4.76055 17.5855C4.10138 16.5988 3.74956 15.4389 3.74956 14.2523C3.74956 13.0658 4.10138 11.9058 4.76055 10.9192C5.41972 9.93257 6.35664 9.16353 7.45283 8.70932C8.54903 8.25512 9.7553 8.13614 10.9191 8.36743C12.0829 8.59873 13.152 9.1699 13.9912 10.0087C15.1148 11.1353 15.7457 12.6613 15.7457 14.2523C15.7457 15.8433 15.1148 17.3694 13.9912 18.4959Z"
      fill="black"
    />
  </Svg>
);