import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBriefcase = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30' fill='none' {...props}>
    <path
      fillRule='evenodd'
      d='M9.375 6.563a3.75 3.75 0 0 1 3.75-3.75h3.75a3.75 3.75 0 0 1 3.75 3.75v.256q1.749.16 3.468.417c1.817.272 3.095 1.854 3.095 3.646v3.792c0 1.514-.918 2.94-2.42 3.44A30.9 30.9 0 0 1 15 19.687c-3.411 0-6.696-.552-9.767-1.573-1.503-.5-2.42-1.927-2.42-3.44v-3.792c0-1.792 1.277-3.374 3.094-3.646a61 61 0 0 1 3.468-.417zm9.375 0v.113a62 62 0 0 0-7.5 0v-.114c0-1.035.84-1.875 1.875-1.875h3.75c1.035 0 1.875.84 1.875 1.875M15 16.874A.937.937 0 1 0 15 15a.937.937 0 0 0 0 1.875'
      clipRule='evenodd'
    />
    <path d='M3.75 23v-3.495q.418.23.891.388A32.8 32.8 0 0 0 15 21.563c3.615 0 7.099-.586 10.359-1.67q.473-.158.891-.388V23c0 1.815-1.31 3.41-3.154 3.654-2.65.352-5.352.534-8.096.534s-5.447-.182-8.096-.534C5.059 26.41 3.75 24.814 3.75 23' />
  </svg>
);
export default SvgBriefcase;
