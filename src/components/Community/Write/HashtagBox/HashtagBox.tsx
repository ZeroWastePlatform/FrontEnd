import React from "react";
import {
  HashtagBoxInput,
  HashtagBoxInputBox,
  HashtagBoxInputWrap,
  HashtagBoxItem,
  HashtagBoxLayout,
  HashtagBoxText,
} from "./HashtagBox.styles";

interface HashtagBoxProps {
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  hashtagList: string[];
  inputRef: React.RefObject<HTMLInputElement>;
}

const HashtagBox = ({ handleKeyDown, hashtagList, inputRef }: HashtagBoxProps) => {
  return (
    <HashtagBoxLayout>
      <HashtagBoxInputBox>
        <HashtagBoxText>해시태그 추가</HashtagBoxText>
        <HashtagBoxInputWrap>
          {hashtagList?.map((hashtag, idx) => (
            <HashtagBoxItem key={idx}>{hashtag}</HashtagBoxItem>
          ))}
          <HashtagBoxInput placeholder="해시태그를 입력해주세요." onKeyDown={handleKeyDown} ref={inputRef} />
        </HashtagBoxInputWrap>
      </HashtagBoxInputBox>
    </HashtagBoxLayout>
  );
};

export default HashtagBox;
