import { useRecoilValue } from "recoil";
import { isLoginUserAtom } from "../atom/loginuser";

const useLoginCheck = () => {
  return useRecoilValue(isLoginUserAtom).login;
};

export default useLoginCheck;
