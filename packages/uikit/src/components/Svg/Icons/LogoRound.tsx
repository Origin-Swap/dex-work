import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 96 96" {...props}>
      <image width="96" height="96" href="https://app.tektias.xyz/images/logo.png" />
    </Svg>
  );
};

export default Icon;
