import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 20" {...props}>
      <polygon points="10.13 4.6 11.2 1.61 11.17 1.62 3.15 9.55 19 8.82 17.68 4.36 10.13 4.6" fill="#e9dec2" />
      <polygon
        points="12.55 14.13 12.58 19.07 12.94 19.01 17.14 11.14 3.05 11.65 0.67 14.18 12.55 14.13"
        fill="#e9dec2"
      />
    </Svg>
  );
};

export default Icon;
