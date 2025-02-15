import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUser = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 64 64' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M20 16C20 9.37258 25.3726 4 32 4C38.6274 4 44 9.37258 44 16C44 22.6274 38.6274 28 32 28C25.3726 28 20 22.6274 20 16Z'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10.0034 53.6142C10.2096 41.6415 19.9787 32 32 32C44.0217 32 53.7909 41.642 53.9967 53.6151C54.0104 54.4091 53.5529 55.136 52.8311 55.4672C46.4873 58.3781 39.4308 60 32.0009 60C24.5703 60 17.5132 58.3778 11.1689 55.4664C10.4471 55.1352 9.98967 54.4083 10.0034 53.6142Z'
    />
  </svg>
);
export default SvgUser;
