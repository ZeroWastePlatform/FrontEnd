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
  imgFileList:
    | {
        id: string;
        file: File;
        src: string;
      }[]
    | undefined;
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
        {imgFileList?.map((image, idx) => (
          <AttachmentUploadImgItem key={idx} src={image.src}>
            <AttachmentUploadImgClose onClick={() => handleClickRemoveImg(image.id)}>X</AttachmentUploadImgClose>
          </AttachmentUploadImgItem>
        ))}
      </AttachmentUploadImgList>
    </AttachmentUploadImgBox>
  );
};

export default Attachment;
