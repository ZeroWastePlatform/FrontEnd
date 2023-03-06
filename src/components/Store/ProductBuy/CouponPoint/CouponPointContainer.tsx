import { useRef } from "react";
import { useSetRecoilState } from "recoil";
import { isBuyFormAtom } from "../../../../atom/buyForm";
import CouponPoint from "./CouponPoint";

const CouponPointContainer = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const timer = useRef<NodeJS.Timeout>();
  const setToggleAtom = useSetRecoilState(isBuyFormAtom);
  const changeHandler = () => {
    if (timer) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      const value = Number(inputRef.current?.value);
      if (value >= 0 && value <= 3000) {
        setToggleAtom(prev => ({ ...prev, point: value }));
      } else {
        setToggleAtom(prev => ({ ...prev, point: 0 }));
        if (inputRef.current !== null) {
          alert("최대 포인트 이상을 사용할수 없습니다!");
          inputRef.current.value = "0";
        }
      }
    }, 500);
  };

  const changeMaxPoint = () => {
    if (inputRef.current !== null) {
      inputRef.current.value = "3000";
    }
    setToggleAtom(prev => ({ ...prev, point: 3000 }));
  };
  return <CouponPoint inputRef={inputRef} changeHandler={changeHandler} changeMaxPoint={changeMaxPoint} />;
};

export default CouponPointContainer;
