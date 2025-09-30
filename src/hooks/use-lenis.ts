import { useEffect } from 'react';
import { useLenis } from '@studio-freight/lenis';

export const useLenisScroll = () => {
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      // Sync Lenis with Framer Motion
      lenis.on('scroll', () => {
        // This ensures smooth integration with Framer Motion animations
      });
    }
  }, [lenis]);

  return lenis;
};

