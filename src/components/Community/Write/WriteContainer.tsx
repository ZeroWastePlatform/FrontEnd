import axios from "axios";
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { selectValueSelector } from "../../../atom/selectValue";
import { writeFormAtom } from "../../../atom/writeForm";
import useSetQueryMutate from "../../../hooks/useSetQueryMutate";
import Write from "./Write";

const WriteContainer = () => {
  const { mutate } = useSetQueryMutate(data => axios.post("http://greenus.duckdns.org/posts", { data }));
  const [writeForm, setWriteForm] = useRecoilState(writeFormAtom);
  const kind = useRecoilValue(selectValueSelector);

  const changeFormData = (key: string, data: string | number) => {
    setWriteForm(prev => ({ ...prev, [key]: data }));
  };

  const handleClickRegist = () => {
    if (writeForm.kind === 0) {
      alert("게시판을 선택해 주세요.");
    } else if (writeForm.title === "") {
      alert("제목을 입력해 주세요.");
    } else if (writeForm.content === "") {
      alert("내용을 입력해 주세요.");
    } else {
      mutate(writeForm);
    }
  };

  useEffect(() => {
    changeFormData("kind", kind);
  }, [kind]);
  return <Write handleClickRegist={handleClickRegist} changeFormData={changeFormData} />;
};

export default WriteContainer;
