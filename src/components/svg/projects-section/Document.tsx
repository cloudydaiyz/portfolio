import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDocument = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 41' fill='none' {...props}>
    <path
      fillRule='evenodd'
      d='M9.375 3A3.125 3.125 0 0 0 6.25 6.125v28.75C6.25 36.601 7.65 38 9.375 38h21.25c1.726 0 3.125-1.4 3.125-3.125V21.75a6.25 6.25 0 0 0-6.25-6.25h-3.125a3.125 3.125 0 0 1-3.125-3.125V9.25A6.25 6.25 0 0 0 15 3zM12.5 25.5c0-.69.56-1.25 1.25-1.25h12.5a1.25 1.25 0 1 1 0 2.5h-12.5c-.69 0-1.25-.56-1.25-1.25m1.25 3.75a1.25 1.25 0 1 0 0 2.5H20a1.25 1.25 0 1 0 0-2.5z'
      clipRule='evenodd'
    />
    <path d='M21.619 3.527A8.72 8.72 0 0 1 23.75 9.25v3.125c0 .345.28.625.625.625H27.5c2.188 0 4.19.803 5.724 2.131A16.28 16.28 0 0 0 21.619 3.527' />
  </svg>
);
export default SvgDocument;
