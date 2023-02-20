import { useState } from "react";
import { FoldTextCheckBox, FoldTextFoldableText, FoldTextLayout, FoldTextTitleBox } from "./FoldText.styles";

const FoldText = () => {
  const [fold, setFold] = useState(false);
  return (
    <FoldTextLayout>
      <FoldTextTitleBox>
        <FoldTextCheckBox type="checkbox" />
        <div>개인정보 수집 이용 및 제 3자 제공 동의 (필수)</div>
        <button onClick={() => setFold(!fold)}>열기</button>
      </FoldTextTitleBox>
      {fold ? (
        <FoldTextFoldableText>
          개인정보 관련 내용~ 개인정보 관련 내용~개인정보 관련 내용~개인정보 관련 내용~개인정보 관련 내용~개인정보 관련
          내용~개인정보 관련 내용~개인정보 관련 내용~개인정보 관련 내용~개인정보 관련 내용~개인정보 관련 내용~개인정보
          관련 내용~개인정보 관련 내용~개인정보 관련 내용~개인정보 관련 내용~개인정보 관련 내용~개인정보 관련
          내용~개인정보 관련 내용~개인정보 관련 내용~개인정보 관련 내용~
        </FoldTextFoldableText>
      ) : null}
    </FoldTextLayout>
  );
};

export default FoldText;
