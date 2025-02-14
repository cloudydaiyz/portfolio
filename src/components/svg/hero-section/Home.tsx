import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHome = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={30} height={30} fill='none' {...props}>
    <path
      fill='#fff'
      d='M14.337 4.801a.937.937 0 0 1 1.326 0l10.862 10.862a.937.937 0 1 0 1.325-1.326L16.99 3.475a2.81 2.81 0 0 0-3.978 0L2.15 14.337a.938.938 0 0 0 1.325 1.326z'
    />
    <path
      fill='#fff'
      d='m15 6.79 10.199 10.199q.056.056.113.107v7.748a2.344 2.344 0 0 1-2.343 2.343H18.75a.94.94 0 0 1-.937-.937v-5.625a.937.937 0 0 0-.938-.937h-3.75a.937.937 0 0 0-.937.937v5.625c0 .518-.42.938-.938.938H7.031a2.344 2.344 0 0 1-2.343-2.344v-7.748q.057-.051.113-.107z'
    />
  </svg>
);
export default SvgHome;
