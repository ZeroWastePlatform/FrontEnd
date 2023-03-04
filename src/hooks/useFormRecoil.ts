import { useRef } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isBuyFormAtom } from "../atom/buyForm";

const useFormRecoil = (title: string) => {
  const elementRef = useRef<HTMLInputElement | HTMLSelectElement>(null);
  const timer = useRef<NodeJS.Timeout>();
  const setToggleAtom = useSetRecoilState(isBuyFormAtom);
  const isToggle = useRecoilValue(isBuyFormAtom);
  const changeHandler = () => {
    if (timer) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      setToggleAtom(prev => ({ ...prev, [title]: elementRef.current?.value }));
    }, 500);
  };

  return { elementRef, changeHandler };
};

export default useFormRecoil;
