import { useState, useEffect } from 'react';

const isRenderingOnServer = typeof window === 'undefined';

const getInitialState = () => {
  return isRenderingOnServer ? 0 : window.innerWidth;
};
function useViewport() {
  const [width, setWidth] = useState(getInitialState());

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
  return { width };
}

export default useViewport;
