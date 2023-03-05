import React from "react";
import {
  AttachmentUploadImgBox,
  AttachmentUploadImgClose,
  AttachmentUploadImgIcon,
  AttachmentUploadImgInput,
  AttachmentUploadImgItem,
  AttachmentUploadImgLabel,
  AttachmentUploadImgList,
} from "./Attachment.styles";

interface AttachmentProps {
  handleChangeImg: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClickRemoveImg: (src: string) => void;
  imgFileList: string[];
}

const Attachment = ({ handleChangeImg, handleClickRemoveImg, imgFileList }: AttachmentProps) => {
  return (
    <AttachmentUploadImgBox>
      <AttachmentUploadImgLabel htmlFor="file">
        이미지 첨부
        <AttachmentUploadImgIcon />
        <AttachmentUploadImgInput type="file" accept="image/*" id="file" name="file" onChange={handleChangeImg} />
      </AttachmentUploadImgLabel>
      <AttachmentUploadImgList>
        {imgFileList?.map((src, idx) => (
          <AttachmentUploadImgItem key={idx} src={src}>
            <AttachmentUploadImgClose onClick={() => handleClickRemoveImg(src)}>X</AttachmentUploadImgClose>
          </AttachmentUploadImgItem>
        ))}
      </AttachmentUploadImgList>
    </AttachmentUploadImgBox>
  );
};

export default Attachment;
