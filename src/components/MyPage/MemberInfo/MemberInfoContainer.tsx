import MemberInfo from "./MemberInfo";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { isBuyFormAtom } from "../../../atom/buyForm";
import useFormRecoil from "../../../hooks/useFormRecoil";

const MemberInfoContainer = () => {
  const { changeHandler: address1Hander, elementRef: address1Ref } = useFormRecoil("address1");
  const { changeHandler: address2Hander, elementRef: address2Ref } = useFormRecoil("address2");

  const [isOpenPost, setIsOpenPost] = useState(false);
  const setToggleAtom = useSetRecoilState(isBuyFormAtom);

  const onCompletePost = (data: any) => {
    let fullAddr = data.address;
    let extraAddr = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddr += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddr += extraAddr !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddr += extraAddr !== "" ? ` (${extraAddr})` : "";
    }

    setToggleAtom(prev => ({ ...prev, address1: data.zonecode, address2: fullAddr }));
    if (address1Ref.current !== null) {
      address1Ref.current.value = data.zonecode;
    }
    if (address2Ref.current !== null) {
      address2Ref.current.value = fullAddr;
    }
    changePostStatus();
  };

  const changePostStatus = () => {
    if (isOpenPost) {
      document.body.style.removeProperty("overflow");
    } else {
      document.body.style.overflow = "hidden";
    }
    setIsOpenPost(!isOpenPost);
  };

  return (
    <MemberInfo
      onCompletePost={onCompletePost}
      isOpenPost={isOpenPost}
      changePostStatus={changePostStatus}
      address1Ref={address1Ref}
      address2Ref={address2Ref}
      address1Hander={address1Hander}
      address2Hander={address2Hander}
    />
  );
};

export default MemberInfoContainer;
