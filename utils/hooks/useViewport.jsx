import { useState, useEffect } from 'react';

function useViewport() {
  const [width, setWidth] = useState();
  const isRenderingOnServer = typeof window === 'undefined';

  useEffect(() => {
    if (isRenderingOnServer) {
      return;
    } else {
      setWidth(window.innerWidth);
    }

    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [isRenderingOnServer]);
  return { width };
}

export default useViewport;
