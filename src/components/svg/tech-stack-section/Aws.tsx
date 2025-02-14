import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAws = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={100} height={100} fill='none' {...props}>
    <g clipPath='url(#aws_svg__a)'>
      <path
        fill='#fff'
        d='M28.18 41.817c0 1.233.133 2.229.366 2.958.267.733.6 1.533 1.067 2.4.166.263.233.53.233.763 0 .333-.2.666-.634 1l-2.095 1.395a1.6 1.6 0 0 1-.867.3c-.333 0-.667-.166-.996-.466a10.3 10.3 0 0 1-1.196-1.563 26 26 0 0 1-1.033-1.962q-3.89 4.587-9.78 4.587c-2.79 0-5.02-.796-6.65-2.392-1.628-1.6-2.457-3.725-2.457-6.387 0-2.825.995-5.125 3.025-6.85 2.029-1.73 4.72-2.596 8.145-2.596 1.134 0 2.296.1 3.525.267 1.234.166 2.5.433 3.825.733v-2.429c0-2.53-.529-4.292-1.562-5.32-1.063-1.034-2.858-1.53-5.417-1.53-1.167 0-2.367.13-3.596.43s-2.429.666-3.591 1.133q-.57.255-1.167.433-.258.082-.53.096c-.466 0-.7-.334-.7-1.03v-1.629c0-.533.068-.933.234-1.166.252-.303.572-.541.934-.696q1.743-.9 4.187-1.5a20.2 20.2 0 0 1 5.192-.63c3.958 0 6.85.9 8.712 2.697 1.83 1.791 2.759 4.52 2.759 8.179v10.775zm-13.5 5.058c1.095 0 2.224-.2 3.424-.6 1.196-.4 2.263-1.13 3.159-2.125.533-.633.933-1.333 1.133-2.133a12 12 0 0 0 .333-2.892v-1.396a28 28 0 0 0-3.062-.566 25 25 0 0 0-3.125-.2c-2.23 0-3.859.433-4.959 1.333-1.095.896-1.625 2.158-1.625 3.82 0 1.563.396 2.73 1.23 3.526.795.833 1.958 1.233 3.491 1.233m26.708 3.592c-.6 0-1-.1-1.267-.334-.267-.2-.5-.666-.7-1.296l-7.813-25.712a5.8 5.8 0 0 1-.3-1.333c0-.534.267-.834.796-.834h3.263c.629 0 1.062.105 1.291.334.271.2.471.666.667 1.3l5.592 22.016 5.187-22.016c.167-.667.367-1.1.63-1.3.4-.245.865-.362 1.333-.334h2.658c.633 0 1.067.105 1.333.334.263.2.5.666.63 1.3l5.254 22.283 5.754-22.283c.2-.667.433-1.1.666-1.3.387-.245.84-.362 1.296-.334h3.096c.53 0 .834.271.834.834 0 .166-.038.333-.071.533q-.078.427-.234.833l-8.012 25.709q-.3.997-.7 1.296c-.376.24-.817.357-1.263.333h-2.862c-.63 0-1.063-.1-1.334-.334-.262-.233-.495-.666-.625-1.333L51.33 27.38l-5.125 21.417c-.166.666-.362 1.1-.625 1.333-.27.233-.737.334-1.333.334zm42.733.895c-1.73 0-3.459-.2-5.121-.595-1.662-.4-2.958-.834-3.825-1.334-.533-.295-.896-.629-1.03-.929a2.35 2.35 0 0 1-.2-.933v-1.696c0-.696.268-1.03.763-1.03q.3 0 .6.1c.2.068.5.2.834.334 1.129.5 2.358.896 3.658 1.163 1.33.266 2.625.4 3.958.4 2.092 0 3.725-.367 4.855-1.1a3.58 3.58 0 0 0 1.729-3.159 3.24 3.24 0 0 0-.896-2.329c-.6-.629-1.733-1.196-3.363-1.729l-4.82-1.5c-2.43-.762-4.226-1.892-5.321-3.387a7.93 7.93 0 0 1-1.667-4.825c0-1.396.304-2.625.9-3.692a8.5 8.5 0 0 1 2.396-2.725c1-.767 2.125-1.334 3.458-1.73 1.334-.4 2.73-.566 4.192-.566.729 0 1.496.033 2.229.133.763.1 1.458.234 2.158.367.667.167 1.3.333 1.896.53q.9.3 1.4.6c.393.197.735.482 1 .832.215.324.319.709.296 1.096v1.563c0 .7-.267 1.067-.767 1.067a3.5 3.5 0 0 1-1.262-.4 15.2 15.2 0 0 0-6.384-1.296c-1.895 0-3.395.296-4.425.929-1.033.633-1.562 1.596-1.562 2.958 0 .934.333 1.733 1 2.363.663.633 1.892 1.266 3.654 1.833l4.725 1.492c2.392.766 4.125 1.833 5.154 3.195 1.03 1.363 1.53 2.925 1.53 4.655 0 1.429-.3 2.729-.863 3.858-.6 1.133-1.4 2.13-2.43 2.93-1.032.833-2.262 1.428-3.69 1.862-1.5.462-3.06.695-4.76.695m6.287 16.167C79.467 75.613 63.567 79.9 49.9 79.9c-19.158 0-36.417-7.083-49.458-18.858-1.03-.93-.1-2.196 1.133-1.463 14.1 8.18 31.496 13.138 49.488 13.138 12.141 0 25.474-2.53 37.75-7.717 1.829-.833 3.391 1.196 1.595 2.53m4.559-5.191c-1.4-1.792-9.25-.863-12.809-.43-1.062.134-1.229-.8-.262-1.5 6.25-4.387 16.529-3.125 17.725-1.662 1.196 1.5-.334 11.775-6.188 16.696-.896.766-1.762.366-1.362-.63 1.333-3.291 4.291-10.708 2.896-12.474'
      />
    </g>
    <defs>
      <clipPath id='aws_svg__a'>
        <path fill='#fff' d='M0 0h100v100H0z' />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAws;
