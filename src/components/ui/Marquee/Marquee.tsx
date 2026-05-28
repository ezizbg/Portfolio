import type { ReactNode } from 'react';
import './Marquee.scss';

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
  reverse?: boolean;
  className?: string;
}

// Infinite horizontal scroll using CSS keyframes. We duplicate the children
// twice and translate by -50% so the loop is seamless without JS.
export function Marquee({
  children,
  speed = 32,
  reverse = false,
  className,
}: MarqueeProps) {
  return (
    <div
      className={['marquee', className].filter(Boolean).join(' ')}
      style={{ ['--marquee-duration' as string]: `${speed}s` }}
      aria-hidden="true"
    >
      <div
        className={['marquee__track', reverse ? 'marquee__track--reverse' : ''].filter(Boolean).join(' ')}
      >
        <div className="marquee__group">{children}</div>
        <div className="marquee__group">{children}</div>
      </div>
    </div>
  );
}
