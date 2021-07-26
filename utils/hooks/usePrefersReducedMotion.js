const MOTION_QUERY = '(prefers-reduced-motion: no-preference )';

const isRenderingOnServer = typeof window === 'undefined';

const getInitialState = () => {
  // For our initial server render, we won't know if the user
  // prefers reduced motion, but it doesn't matter. This value
  // will be overwritten on the client, before any animations
  // occur.
  return isRenderingOnServer ? true : !window.matchMedia(MOTION_QUERY).matches;
};

const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    getInitialState()
  );

  useEffect(() => {
    const mediaQueryList = window.matchMedia(MOTION_QUERY);

    const mediaQueryListListener = (event) => {
      setPrefersReducedMotion(!event.matches);
    };
    mediaQueryList.addListener(mediaQueryListListener);
    return () => {
      mediaQueryList.removeListener(mediaQueryListListener);
    };
  }, [prefersReducedMotion]);
  return prefersReducedMotion;
};

export default usePrefersReducedMotion;
