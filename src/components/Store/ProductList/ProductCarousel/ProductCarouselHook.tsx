import { useEffect, useState } from "react";

const useProductCarousel = (length: number) => {
  const [order, setOrder] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setOrder(order => (order === length - 1 ? 0 : order + 1));
    }, 2000);
  }, []);

  const movePrevOrder = () => {
    setOrder(order === 0 ? length - 1 : order - 1);
  };

  const moveNextOrder = () => {
    setOrder(order === length - 1 ? 0 : order + 1);
  };

  return { order, movePrevOrder, moveNextOrder };
};

export default useProductCarousel;
