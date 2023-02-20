import { useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import { isBuyFormAtom } from "../../../../atom/buyForm";
import ShipInfo from "./ShipInfo";

const ShipInfoContainer = () => {
  const adress1 = useRef<HTMLInputElement>(null);
  const adress2 = useRef<HTMLInputElement>(null);

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
    if (adress1.current !== null) {
      adress1.current.value = data.zonecode;
    }
    if (adress2.current !== null) {
      adress2.current.value = fullAddr;
    }
  };

  return (
    <ShipInfo
      onCompletePost={onCompletePost}
      isOpenPost={isOpenPost}
      setIsOpenPost={setIsOpenPost}
      adress1={adress1}
      adress2={adress2}
    />
  );
};

export default ShipInfoContainer;
