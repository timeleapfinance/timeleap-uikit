import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 20" {...props}>
      <polygon points="15.68 3.88 4.32 4.81 5.26 2.94 14.73 2 15.68 3.88" fill="#e9dec2" />
      <path d="M15.68,5.75,4.32,6.69,1.5,18h17ZM7,13l.6-4.16,5.17-.59L14,13Z" fill="#e9dec2" />
    </Svg>
  );
};

export default Icon;
