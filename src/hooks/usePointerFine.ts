import { useEffect, useState } from 'react';

// Detects whether the user is on a fine-pointer device (mouse). Used to gate
// pointer-only effects like the custom cursor and magnetic hover.
export function usePointerFine(): boolean {
  const [fine, setFine] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(pointer: fine)').matches;
  });

  useEffect(() => {
    const mql = window.matchMedia('(pointer: fine)');
    const handler = (event: MediaQueryListEvent) => setFine(event.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  return fine;
}
