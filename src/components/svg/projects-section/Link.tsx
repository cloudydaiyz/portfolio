import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLink = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={40} height={41} fill='none' {...props}>
    <path
      fill='#969696'
      fillRule='evenodd'
      d='M33.17 7.33a6.25 6.25 0 0 0-8.84 0l-7.5 7.5a6.25 6.25 0 0 0 1.725 10.061 1.25 1.25 0 1 1-1.078 2.256 8.75 8.75 0 0 1-2.415-14.084l7.5-7.5a8.75 8.75 0 0 1 12.375 12.374l-2.928 2.928a1.25 1.25 0 0 1-1.768-1.767l2.928-2.929a6.25 6.25 0 0 0 0-8.838m-12.314 7.112a1.25 1.25 0 0 1 1.667-.59 8.75 8.75 0 0 1 2.415 14.084l-7.5 7.501A8.75 8.75 0 1 1 5.062 23.063l2.928-2.928a1.25 1.25 0 0 1 1.768 1.767L6.83 24.831a6.25 6.25 0 1 0 8.838 8.838l7.5-7.5a6.25 6.25 0 0 0-1.724-10.06 1.25 1.25 0 0 1-.59-1.667'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgLink;
