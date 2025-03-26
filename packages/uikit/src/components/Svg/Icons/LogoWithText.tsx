import { vars } from "@pancakeswap/ui/css/vars.css";
import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Logo: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 1281 300" {...props}>
      <image width="1281" height="300" href="https://app.tektias.xyz/images/LogoText4.png"/>
    </Svg>
  );
};

export default Logo;
