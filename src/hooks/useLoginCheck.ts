import { useRecoilValue } from "recoil";
import { userInfoAtom } from "../atom/userInfo";

const useLoginCheck = () => {
  return useRecoilValue(userInfoAtom).isLogin;
};

export default useLoginCheck;
