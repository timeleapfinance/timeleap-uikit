import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 20" {...props}>
      <path d="M6.43 2.5 5.8 5.32 14.63 5.18 13.91 11.33 15.88 11.07 18.09 1.4 6.43 2.5z" fill="#e9dec2" />
      <path d="M12.99 18.6 3.74 14.3 1.91 6.81 11.99 6.81 12.99 18.6z" fill="#e9dec2" />
    </Svg>
  );
};

export default Icon;
