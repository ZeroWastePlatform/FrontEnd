import React, { useEffect, useRef, useState } from "react";
import HashtagBox from "./HashtagBox";

interface HashtagBoxContainerProps {
  changeFormData: (key: string, data: string | number) => void;
}

const HashtagBoxContainer = ({ changeFormData }: HashtagBoxContainerProps) => {
  const [hashtagList, setHashtagList] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      if (
        !e.currentTarget.value ||
        hashtagList.length === 5 ||
        hashtagList.includes(`#${e.currentTarget.value}`) ||
        e.nativeEvent.isComposing // 이벤트 두번 발생하는 문제 방지
      ) {
        return;
      }
      setHashtagList([...hashtagList, `#${e.currentTarget.value}`]);

      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
    if (e.code === "Backspace" && !e.currentTarget.value) {
      setHashtagList(prev => prev.slice(0, -1));
    }
  };

  useEffect(() => {
    changeFormData("hashtag", hashtagList.join(""));
  }, [hashtagList]);
  return <HashtagBox handleKeyDown={handleKeyDown} hashtagList={hashtagList} inputRef={inputRef} />;
};

export default HashtagBoxContainer;
