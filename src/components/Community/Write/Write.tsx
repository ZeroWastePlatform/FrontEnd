import React from "react";
import { PostType } from "../../../types";
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
  postData?: PostType;
}

const Write = ({ handleClickRegist, changeFormData, postData }: WriteProps) => {
  return (
    <form encType="multipart/form-data" onSubmit={e => e.preventDefault()}>
      <WriteLayout>
        <WriteMenu>
          <CustomSelectContainer
            initialValue="게시판 선택"
            options={[
              { name: "자유게시판", value: "1" },
              { name: "중고거래", value: "2" },
              { name: "정보공유", value: "3" },
            ]}
          />
          <WriteBtnBox>
            <WriteTempDataBtn>임시저장 | 0</WriteTempDataBtn>
            <WriteRegistBtn type="button" onClick={handleClickRegist}>
              등록
            </WriteRegistBtn>
          </WriteBtnBox>
        </WriteMenu>
        <WriteSubjectInput
          placeholder="제목을 입력해주세요."
          onChange={e => changeFormData("title", e.target.value)}
          defaultValue={postData && postData.title}
        />
        <WriteContent
          placeholder="내용을 입력해주세요."
          onChange={e => changeFormData("content", e.target.value)}
          defaultValue={postData && postData.content}
        ></WriteContent>
        <WriteOptionBox>
          <AttachmentContainer />
          <HashtagBoxContainer changeFormData={changeFormData} />
        </WriteOptionBox>
      </WriteLayout>
    </form>
  );
};

export default Write;
