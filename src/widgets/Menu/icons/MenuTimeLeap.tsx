import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 20" {...props}>
      <polygon points="4.63 19.04 0.2 16.37 11.48 14.09 19.8 17.95 4.63 19.04" fill="#e9dec2" />
      <polygon points="10.77 9.7 5.07 10.03 12.14 1 15.63 13.79 10.77 9.7" fill="#e9dec2" />
    </Svg>
  );
};

export default Icon;
