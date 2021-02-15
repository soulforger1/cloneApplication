import React from 'react';
import {Image} from 'react-native';
const Logo = require('../figmaLogo.png');

interface Props {
  height?: number;
  width?: number;
  others?: any;
}

export const FigmaLogo: React.FC<Props> = ({height, width, ...others}) => {
  return <Image source={Logo} style={{height, width}} {...others} />;
};
