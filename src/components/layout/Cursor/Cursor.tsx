import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

import { usePointerFine } from '@/hooks/usePointerFine';
import './Cursor.scss';

const INTERACTIVE_SELECTOR = 'a, button, [data-cursor="hover"], input, textarea';

export function Cursor() {
  const isFine = usePointerFine();
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 350, damping: 32, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 350, damping: 32, mass: 0.4 });

  const rafRef = useRef<number | null>(null);
  const lastEvent = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (!isFine) return;

    const handleMove = (event: PointerEvent) => {
      lastEvent.current = { x: event.clientX, y: event.clientY };
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        if (!lastEvent.current) return;
        x.set(lastEvent.current.x);
        y.set(lastEvent.current.y);
        setVisible(true);
      });
    };

    const handleOver = (event: PointerEvent) => {
      const target = event.target as Element | null;
      setHovered(Boolean(target?.closest(INTERACTIVE_SELECTOR)));
    };

    const handleLeave = () => setVisible(false);

    window.addEventListener('pointermove', handleMove, { passive: true });
    window.addEventListener('pointerover', handleOver, { passive: true });
    window.addEventListener('pointerleave', handleLeave);

    return () => {
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerover', handleOver);
      window.removeEventListener('pointerleave', handleLeave);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [isFine, x, y]);

  if (!isFine) return null;

  return (
    <motion.div
      className={[
        'cursor',
        hovered ? 'cursor--hovered' : '',
        visible ? 'cursor--visible' : '',
      ].filter(Boolean).join(' ')}
      style={{ x: sx, y: sy }}
      aria-hidden="true"
    >
      <span className="cursor__dot" />
      <span className="cursor__ring" />
    </motion.div>
  );
}
