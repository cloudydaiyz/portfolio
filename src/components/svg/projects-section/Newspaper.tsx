import * as React from 'react';
import type { SVGProps } from 'react';
const SvgNewspaper = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={40} height={41} fill='none' {...props}>
    <path
      fill='#969696'
      fillRule='evenodd'
      d='M6.875 5.5A3.125 3.125 0 0 0 3.75 8.625V30.5a5 5 0 0 0 5 5h25a5 5 0 0 1-5-5V8.625c0-1.726-1.4-3.125-3.125-3.125zM20 16.75a1.25 1.25 0 1 0 0 2.5h2.5a1.25 1.25 0 1 0 0-2.5zM18.75 13c0-.69.56-1.25 1.25-1.25h2.5a1.25 1.25 0 1 1 0 2.5H20c-.69 0-1.25-.56-1.25-1.25M10 21.75a1.25 1.25 0 1 0 0 2.5h12.5a1.25 1.25 0 1 0 0-2.5zM8.75 28c0-.69.56-1.25 1.25-1.25h12.5a1.25 1.25 0 1 1 0 2.5H10c-.69 0-1.25-.56-1.25-1.25M10 11.75c-.69 0-1.25.56-1.25 1.25v5c0 .69.56 1.25 1.25 1.25h5c.69 0 1.25-.56 1.25-1.25v-5c0-.69-.56-1.25-1.25-1.25z'
      clipRule='evenodd'
    />
    <path fill='#969696' d='M31.25 11.75h3.125c1.035 0 1.875.84 1.875 1.875V30.5a2.5 2.5 0 0 1-5 0z' />
  </svg>
);
export default SvgNewspaper;
