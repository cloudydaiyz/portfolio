// Background image + gradient
// Height: 900px (~952.46 in Figma) (or just use 100% of the vh)
// Have an option to specify whether this is the top or bottom
//  - if top: position y = 0 + offset
//  - if bottom: position y = -900 - offset (height of the bg minus offset)

// className='bg-[url(/bg-pattern.svg)] bg-repeat'

interface BackgroundProps {
  top?: boolean;
}

export default function Background({ top }: BackgroundProps) {
  if (top) {
  }
  return <></>;
}
