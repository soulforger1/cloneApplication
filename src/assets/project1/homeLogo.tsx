import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  height?: number;
  width?: number;
  color?: string;
  others?: any;
}

export const HomeLogo: React.FC<Props> = ({
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
        d="M20.152 7.591a3.052 3.052 0 011.14 2.348l-.01 7.974a3.922 3.922 0 01-3.921 3.922h-1.74c-1.048 0-1.899-.848-1.904-1.896v-3.6a.504.504 0 00-.504-.504h-2.609a.504.504 0 00-.504.513v1.374a.783.783 0 01-1.565 0v-1.374a2.078 2.078 0 012.078-2.078h2.609a2.078 2.078 0 012.07 2.078v3.591c0 .183.147.33.33.33h1.782a2.348 2.348 0 002.348-2.347V9.957a1.47 1.47 0 00-.556-1.13l-6.009-4.792a2.052 2.052 0 00-2.609 0l-1.93 1.443a.798.798 0 01-.93-1.295L9.621 2.8a3.609 3.609 0 014.521 0l6.01 4.791zm-13.73 12.67h4v.017a.783.783 0 110 1.566h-4A3.93 3.93 0 012.5 17.921V9.957a3.026 3.026 0 011.174-2.348l.722-.54A.783.783 0 015.3 8.314l-.704.522a1.47 1.47 0 00-.53 1.122v7.956a2.365 2.365 0 002.356 2.348z"
        fill={color}
      />
    </Svg>
  );
};
