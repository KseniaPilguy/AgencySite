import { RefObject, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const useElementOnScreen = (
  ref: RefObject<Element>,
  rootMargin = "-300px",
) => {
  const [isIntersecting, setIntersecting] = useState(false);
  const isTablet = useMediaQuery({ maxWidth: 880 });

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && ref.current) observer.unobserve(ref.current)
      setIntersecting(entry.isIntersecting)
    }, {rootMargin});
    if (!ref?.current) return;

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isTablet ? true : isIntersecting;
}

export default useElementOnScreen;
