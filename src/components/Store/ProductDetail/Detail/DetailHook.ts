import { useEffect, useRef, useState } from "react";

const useDetail = () => {
  const [navigation, setNavigation] = useState("info");
  const infoRef = useRef<HTMLDivElement>(null);
  const reviewRef = useRef<HTMLDivElement>(null);
  const deliveryRef = useRef<HTMLDivElement>(null);
  const askRef = useRef<HTMLDivElement>(null);
  const recommendRef = useRef<HTMLDivElement>(null);
  const refs: { [index: string]: React.RefObject<HTMLDivElement> } = {
    info: infoRef,
    review: reviewRef,
    delivery: deliveryRef,
    ask: askRef,
    recommend: recommendRef,
  };
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    const navigatePosition = () => {
      if (!timer) {
        timer = setTimeout(() => {
          const curNavigation = Object.keys(refs)
            .map(ref => ({ position: refs[ref].current?.getBoundingClientRect().top, category: ref }))
            .reverse()
            .find(el => (el.position as number) <= 1);
          console.log(Object.keys(refs).map(ref => refs[ref].current?.getBoundingClientRect().top));
          if (curNavigation !== undefined) {
            setNavigation(curNavigation.category);
          }
          timer = null;
        }, 100);
      }
    };
    window.addEventListener("scroll", navigatePosition);
    return () => {
      window.removeEventListener("scroll", navigatePosition);
    };
  }, []);

  const navigate = (type: string) => {
    refs[type].current?.scrollIntoView();
    setNavigation(type);
  };

  return { navigation, refs, navigate };
};

export default useDetail;
