import * as React from 'react';
import type { SVGProps } from 'react';
const SvgEnvelope = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={30} height={30} fill='none' {...props}>
    <path
      fill='#fff'
      d='M1.875 10.836v10.727a3.75 3.75 0 0 0 3.75 3.75h18.75a3.75 3.75 0 0 0 3.75-3.75V10.836l-11.16 6.868a3.75 3.75 0 0 1-3.93 0z'
    />
    <path
      fill='#fff'
      d='M28.125 8.635v-.197a3.75 3.75 0 0 0-3.75-3.75H5.625a3.75 3.75 0 0 0-3.75 3.75v.197l12.142 7.472c.603.37 1.363.37 1.966 0z'
    />
  </svg>
);
export default SvgEnvelope;
