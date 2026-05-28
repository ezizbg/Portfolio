import {
  useRef,
  type ReactNode,
} from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

import { usePointerFine } from '@/hooks/usePointerFine';

interface MagneticLinkProps {
  children: ReactNode;
  strength?: number;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  'aria-label'?: string;
}

export function MagneticLink({
  children,
  strength = 18,
  className,
  href,
  target,
  rel,
  'aria-label': ariaLabel,
}: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const isFine = usePointerFine();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.6 });

  const handleMove = (event: React.PointerEvent<HTMLAnchorElement>) => {
    if (!isFine || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = event.clientX - (rect.left + rect.width / 2);
    const relY = event.clientY - (rect.top + rect.height / 2);
    x.set((relX / rect.width) * strength);
    y.set((relY / rect.height) * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      className={className}
      style={{ x: sx, y: sy }}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
    >
      {children}
    </motion.a>
  );
}
