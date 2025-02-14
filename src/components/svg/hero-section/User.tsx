import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUser = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={64} height={64} fill='none' {...props}>
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M20 16c0-6.627 5.373-12 12-12s12 5.373 12 12-5.373 12-12 12-12-5.373-12-12M10.003 53.614C10.21 41.642 19.98 32 32 32c12.022 0 21.79 9.642 21.997 21.615a2 2 0 0 1-1.166 1.852A49.8 49.8 0 0 1 32.001 60a49.8 49.8 0 0 1-20.832-4.534 2 2 0 0 1-1.166-1.852'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgUser;
