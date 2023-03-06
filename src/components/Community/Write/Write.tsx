import React, { useState } from "react";
import CustomSelect from "../../Common/CustomSelect/CustomSelect";
import CustomSelectContainer from "../../Common/CustomSelect/CustomSelectContainer";
import AttachmentContainer from "./Attachment/AttachmentContainer";
import HashtagBoxContainer from "./HashtagBox/HashtagBoxContainer";
import {
  WriteBtnBox,
  WriteContent,
  WriteLayout,
  WriteMenu,
  WriteOptionBox,
  WriteRegistBtn,
  WriteSubjectInput,
  WriteTempDataBtn,
} from "./Write.styles";

const Write = () => {
  return (
    <WriteLayout>
      <WriteMenu>
        <CustomSelectContainer initialValue="게시판 선택" options={["자유게시판", "중고거래", "정보공유"]} />
        <WriteBtnBox>
          <WriteTempDataBtn>임시저장 | 0</WriteTempDataBtn>
          <WriteRegistBtn>등록</WriteRegistBtn>
        </WriteBtnBox>
      </WriteMenu>
      <WriteSubjectInput placeholder="제목을 입력해주세요." />
      <WriteContent placeholder="내용을 입력해주세요."></WriteContent>
      <WriteOptionBox>
        <AttachmentContainer />
        <HashtagBoxContainer />
      </WriteOptionBox>
    </WriteLayout>
  );
};

export default Write;
