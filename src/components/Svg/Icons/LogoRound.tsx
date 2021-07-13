import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 50 50" {...props}>
      <circle cx="25" cy="25" r="24.99" fill="#f1e6ca" />
      <polygon
        fill="#697da6"
        points="49.6 25.32 33.67 26.83 33.65 26.83 14 29.99 14.08 31.04 31.07 31.04 49.8 26.36 49.6 25.32"
      />
      <polygon fill="#c14738" points="24.95 10.14 10.03 31.01 26.98 31.01 32.55 5.84 24.95 10.14" />
    </Svg>
  );
};

export default Icon;
