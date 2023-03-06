import React from "react";
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

interface WriteProps {
  handleClickRegist: () => void;
  changeFormData: (key: string, data: string | number) => void;
}

const Write = ({ handleClickRegist, changeFormData }: WriteProps) => {
  return (
    <WriteLayout>
      <WriteMenu>
        <CustomSelectContainer initialValue="게시판 선택" options={["자유게시판", "중고거래", "정보공유"]} />
        <WriteBtnBox>
          <WriteTempDataBtn>임시저장 | 0</WriteTempDataBtn>
          <WriteRegistBtn onClick={handleClickRegist}>등록</WriteRegistBtn>
        </WriteBtnBox>
      </WriteMenu>
      <WriteSubjectInput placeholder="제목을 입력해주세요." onChange={e => changeFormData("title", e.target.value)} />
      <WriteContent
        placeholder="내용을 입력해주세요."
        onChange={e => changeFormData("content", e.target.value)}
      ></WriteContent>
      <WriteOptionBox>
        <AttachmentContainer />
        <HashtagBoxContainer changeFormData={changeFormData} />
      </WriteOptionBox>
    </WriteLayout>
  );
};

export default Write;
