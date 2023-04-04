import { AxiosResponse } from "axios";
import React, { useEffect } from "react";
import { UseMutateFunction } from "react-query";
import { useRecoilState, useRecoilValue } from "recoil";
import { selectValueSelector } from "../atom/selectValue";
import { writeFormAtom } from "../atom/writeForm";
import { PostType } from "../types";

const useWriteForm = (
  mutate: UseMutateFunction<AxiosResponse<any, unknown>, unknown, unknown, unknown>,
  postData?: PostType,
) => {
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
      const formData = new FormData();
      const files = writeForm.images?.map(image => image.file);
      formData.append("kind", writeForm.kind as any);
      formData.append("title", writeForm.title);
      formData.append("content", writeForm.content);
      formData.append("price", writeForm.price as any);
      formData.append("hashtag", writeForm.hashtag as any);
      if (files[0]?.name) {
        files?.forEach(file => {
          formData.append("multipartFiles", file);
        });
      }

      mutate(formData);
    }
  };
  useEffect(() => {
    changeFormData("kind", kind);
  }, [kind]);

  useEffect(() => {
    if (postData) {
      const formData = {
        kind: 0,
        title: postData.title,
        content: postData.content,
        hashtag: postData.hashtags,
        price: postData.price,
      };
      setWriteForm({ ...formData });
    }
  }, [postData]);
  return { handleClickRegist, changeFormData };
};

export default useWriteForm;
