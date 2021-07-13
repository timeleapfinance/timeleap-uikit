import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 236 236" {...props}>
      <rect width="236" height="236" fill="none" />
      <circle className="cls-2" cx="33.81" cy="118" r="33.81" fill="#e9dec2" />
      <circle className="cls-2" cx="118" cy="118" r="33.81" fill="#e9dec2" />
      <circle className="cls-2" cx="202.19" cy="118" r="33.81" fill="#e9dec2" />
    </Svg>
  );
};

export default Icon;
