import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const SmoothScrollProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    let lenis: Lenis | null = null;

    const initLenis = () => {
      try {
        lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          direction: 'vertical',
          gestureDirection: 'vertical',
          smooth: true,
          mouseMultiplier: 1,
          smoothTouch: false,
          touchMultiplier: 2,
          infinite: false,
        });

        function raf(time: number) {
          if (lenis) {
            lenis.raf(time);
            requestAnimationFrame(raf);
          }
        }

        requestAnimationFrame(raf);

        // Handle resize events
        const handleResize = () => {
          if (lenis) {
            lenis.resize();
          }
        };

        window.addEventListener('resize', handleResize);

        return () => {
          window.removeEventListener('resize', handleResize);
          if (lenis) {
            lenis.destroy();
            lenis = null;
          }
        };
      } catch (error) {
        console.warn('Lenis initialization failed:', error);
      }
    };

    // Initialize after DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initLenis);
    } else {
      initLenis();
    }

    return () => {
      if (lenis) {
        lenis.destroy();
        lenis = null;
      }
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScrollProvider;
