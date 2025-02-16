import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

export function useEnterAnim() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const [entered, setEntered] = useState(false);
  const animClasses = entered ? 'fade-in-anim' : 'fade-in-anim paused';

  if (inView && !entered) {
    setEntered(true);
  }

  return { ref, animClasses };
}
