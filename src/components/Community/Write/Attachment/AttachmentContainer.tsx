import React, { useState } from "react";
import Attachment from "./Attachment";

const AttachmentContainer = () => {
  const [file, setFile] = useState("");
  const [imgFileList, setImgFileList] = useState<string[]>([]);

  const handleChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];
    setFile(file as any);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFileList([...imgFileList, reader.result as string]);
    };
  };

  const handleClickRemoveImg = (src: string) => {
    setImgFileList(imgFileList.filter(item => item !== src));
  };
  return (
    <Attachment
      handleChangeImg={handleChangeImg}
      handleClickRemoveImg={handleClickRemoveImg}
      imgFileList={imgFileList}
    />
  );
};

export default AttachmentContainer;
