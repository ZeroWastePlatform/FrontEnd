import React from "react";
import Header from "../Common/Header/Header";
import {
  BestGreenusLayout,
  BestGreenusUserImg,
  BestGreenusUserItem,
  BestGreenusUserList,
  BestGreenusUserName,
} from "./BestGreenus.styles";

const BestGreenus = () => {
  return (
    <BestGreenusLayout>
      <Header title="베스트 그리너스" subTitle="2022.12.12 ~ 2022.12.14 기준" />
      <BestGreenusUserList>
        <BestGreenusUserItem>
          <BestGreenusUserImg></BestGreenusUserImg>
          <BestGreenusUserName>@dngur9801</BestGreenusUserName>
        </BestGreenusUserItem>
        <BestGreenusUserItem>
          <BestGreenusUserImg></BestGreenusUserImg>
          <BestGreenusUserName>@dngur9801</BestGreenusUserName>
        </BestGreenusUserItem>
      </BestGreenusUserList>
    </BestGreenusLayout>
  );
};

export default BestGreenus;
