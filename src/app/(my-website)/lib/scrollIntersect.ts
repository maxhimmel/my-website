import { useEffect, useRef } from "react";

type Props = {
  threshold: number;
  onIntersect: (element: HTMLElement) => void;
};

export function useScrollIntersect<Element extends HTMLElement = HTMLElement>(props: Props) {
  const ref = useRef<Element>(null);

  useEffect(() => {
    let unsubScrolling: null | (() => void) = null;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (entry.isIntersecting) {
          const { unsubscribe } = watchScrolling(ref.current, {
            ...props,
            onIntersect: (element) => {
              props.onIntersect(element);
              observer.unobserve(element);
            },
          });
          unsubScrolling = unsubscribe;
        } else {
          if (unsubScrolling) {
            unsubScrolling();
          }
        }
      },
      {
        threshold: 0,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref };
}

function watchScrolling(element: HTMLElement | null, { threshold, onIntersect: callback }: Props) {
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  function handleScroll() {
    if (!element) {
      return;
    }

    const rect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    if (rect.top <= viewportHeight * threshold) {
      callback(element);
      window.removeEventListener("scroll", handleScroll);
    }
  }

  return { unsubscribe: () => window.removeEventListener("scroll", handleScroll) };
}
