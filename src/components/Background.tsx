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
  let gradientDir = 'bg-gradient-to-b';
  let offset = 'top-0';
  if (!top) {
    gradientDir = 'bg-gradient-to-t';
    offset = 'top-[-120vh]';
  }
  return (
    <div className={`${offset} absolute z-[-10] h-[120vh] w-screen bg-[url(/bg-pattern.svg)] bg-repeat`}>
      <div className={`${gradientDir} h-full w-full from-black/0 via-black/30 to-[#1C1F28]`}></div>
    </div>
  );
}
