import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 290 100" {...props}>
      <circle fill="#f1e6ca" cx="39.42" cy="60.1" r="39.89" />
      <polygon fill="#697da6" fillRule="evenodd" points="67.75 62.74 7.97 71.54 45.96 71.54 113.64 59.56 67.75 62.74" />
      <polygon fill="#e25457" fillRule="evenodd" points="45.19 11.63 4.79 71.54 46.01 71.54 58.89 0 45.19 11.63" />
      <path fill="#f1e6ca" d="M138.13,77.33V28.76H126V22.67h36.44v6.09H150.31V77.33Z" />
      <path fill="#f1e6ca" d="M169.45,77.33V22.67h12.16V77.33Z" />
      <path
        fill="#f1e6ca"
        d="M191.66,77.33V22.67h2.76l26,25.91,25.94-25.91h6.09V77.33H240.23V43.91L218.9,65.23,197.75,43.91V77.33Z"
      />
      <path fill="#f1e6ca" d="M259.65,77.33V22.67H290v6.09H271.78V47H284v6H271.78V71.24H290v6.09Z" />
      <path fill="#f1e6ca" fillRule="evenodd" d="M79.28,62q-.09,1.89-.36,3.75l34.72-6.14Z" />
    </Svg>
  );
};

export default Icon;
