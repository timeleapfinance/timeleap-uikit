import React from "react";
import styled, { keyframes } from "styled-components";
import { SpinnerProps } from "./types";
import LogoNameIcon from "./LogoNameIcon";
import { Svg, SvgProps } from "../Svg";

const float = keyframes`
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(20px);
	}
	100% {
		transform: translatey(0px);
	}
`;

const Container = styled.div`
  position: relative;
`;

const FloatingLogoName = styled(LogoNameIcon)`
  animation: ${float} 2s ease-in-out infinite;
  transform: translate3d(0, 0, 0);
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container>
      <FloatingLogoName width={`${size * 2}px`} />
    </Container>
  );
};

export default Spinner;
