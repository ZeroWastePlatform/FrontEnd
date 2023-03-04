import styled from "styled-components";
import paperclipImg from "../../../../assets/images/paperclip.png";

export const AttachmentUploadImgBox = styled.div`
  display: flex;
`;

export const AttachmentUploadImgLabel = styled.label`
  width: 90px;
  cursor: pointer;
`;

export const AttachmentUploadImgIcon = styled.img.attrs({
  src: paperclipImg,
})`
  padding-top: 10px;
`;

export const AttachmentUploadImgInput = styled.input`
  display: none;
`;

export const AttachmentUploadImgList = styled.ul`
  display: flex;
  gap: 20px;
  margin-left: 30px;
`;

export const AttachmentUploadImgItem = styled.li<{ src: string }>`
  position: relative;
  width: 90px;
  height: 90px;
  background: url(${({ src }) => src}) no-repeat center/cover;
  border: 1px solid ${({ theme }) => theme.colors.gray5};
`;

export const AttachmentUploadImgClose = styled.span`
  position: absolute;
  cursor: pointer;
  right: 102%;
  top: 5px;
`;
