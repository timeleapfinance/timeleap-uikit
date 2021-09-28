import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 20" {...props}>
      <polygon fill="#e9dec2" points="10.83 13.21 4.71 10.5 9.17 6.79 15.29 9.5 10.83 13.21"/>
      <polygon fill="#e9dec2" points="14.54 10.12 5.37 6.06 6.86 4.82 16.03 8.88 14.54 10.12"/>
      <polygon fill="#e9dec2" points="17.51 7.64 5.29 2.24 6.77 1 19 6.41 17.51 7.64"/>
      <polygon fill="#e9dec2" points="5.46 9.88 14.63 13.94 13.14 15.18 3.97 11.12 5.46 9.88"/>
      <polygon fill="#e9dec2" points="2.49 12.36 14.71 17.76 13.23 19 1 13.59 2.49 12.36"/>
    </Svg>
  );
};

export default Icon;
