import { useEffect, useState } from "react";

const useCarousel = (length: number) => {
  const [order, setOrder] = useState(1);
  const [stopTransition, setStopTransition] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setOrder(order => {
        changeOrder({ direction: "right", length, order });
        return order + 1;
      });
    }, 5000);
  }, []);

  const changeOrder = ({ direction, length, order }: { direction: string; length: number; order: number }) => {
    const conditionNumber = direction === "left" ? 1 : length;
    const moveToNumber = direction === "left" ? length : 1;
    const newOrder = direction === "left" ? order - 1 : order + 1;

    if (order === conditionNumber) {
      setTimeout(() => {
        setStopTransition(true);
        setOrder(moveToNumber);
      }, 1000);
    }
    setStopTransition(false);
    setOrder(newOrder);
  };

  const checkActiveItem = (index: number) => {
    if (order === 0 && index === length - 1) return true;
    if (order === length + 1 && index === 0) return true;
    return order === index + 1;
  };

  return { order, stopTransition, changeOrder, checkActiveItem, setOrder };
};

export default useCarousel;
