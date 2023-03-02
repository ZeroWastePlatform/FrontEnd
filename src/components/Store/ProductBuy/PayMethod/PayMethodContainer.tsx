import { useRecoilValue, useSetRecoilState } from "recoil";
import { isBuyFormAtom } from "../../../../atom/buyForm";
import PayMethod from "./PayMethod";

const PayMethodContainer = () => {
  const setToggleAtom = useSetRecoilState(isBuyFormAtom);
  const { buyMethod } = useRecoilValue(isBuyFormAtom);
  const changeMethod = (buyMethod: string) => {
    setToggleAtom(prev => ({ ...prev, buyMethod }));
  };

  return <PayMethod changeMethod={changeMethod} buyMethod={buyMethod}></PayMethod>;
};

export default PayMethodContainer;
