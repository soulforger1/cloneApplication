import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  height?: number;
  width?: number;
  color?: string;
  others?: any;
}

export const DownArrowLogo: React.FC<Props> = ({
  height = 24,
  width = 24,
  color = '#200E32',
  ...others
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...others}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.242 7.744a.814.814 0 011.164.002l7.177 7.326a.846.846 0 01-.003 1.184.811.811 0 01-1.163-.002L4.241 8.926a.847.847 0 010-1.183zm14.35.002a.814.814 0 011.165-.002.847.847 0 01.003 1.184l-4.765 4.865a.813.813 0 01-1.163.002.847.847 0 01-.004-1.183l4.765-4.866z"
        fill={color}
      />
    </Svg>
  );
};
