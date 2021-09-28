import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 20" {...props}>
      <polygon fill="#e9dec2"
        points="12.23 15 11.61 17 3.75 13.21 13.75 9.43 13.13 11 17.15 11 15.46 2.53 2.51 1.54 2.27 5 6.71 5 7.32 3 15.18 6.79 5.18 10.57 5.8 9 2.07 9 1.54 16.47 18.46 18.46 17.77 15 12.23 15"/>
    </Svg>
  );
};

export default Icon;
