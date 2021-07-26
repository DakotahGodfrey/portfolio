import { useState, useEffect } from 'react';

const isRenderingOnServer = typeof window === 'undefined';

const getInitialState = () => {
  if (!isRenderingOnServer) {
    return window.innerWidth;
  }
  return;
};
function useViewport() {
  const [width, setWidth] = useState(getInitialState());

  useEffect(() => {
    setWidth(getInitialState());
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
  return { width };
}

export default useViewport;
