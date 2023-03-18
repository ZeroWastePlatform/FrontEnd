import React, { useState } from "react";
import { useRecoilState } from "recoil";
import uuid from "react-uuid";
import { writeFormAtom } from "../../../../atom/writeForm";
import Attachment from "./Attachment";

const AttachmentContainer = () => {
  const [writeForm, setWriteForm] = useRecoilState(writeFormAtom);
  const [imgFileList, setImgFileList] = useState<string[]>([]);

  const handleChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }

    const file = e.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setWriteForm(prev => {
        const newImages = { id: uuid(), file, src: reader.result as string };
        const newWriteForm = {
          ...prev,
          images: [...(prev.images as any), newImages].filter(image => image.src !== ""),
        };

        return newWriteForm;
      });
    };
  };
  console.log("writeForm", writeForm);
  const handleClickRemoveImg = (id: string) => {
    // setImgFileList(imgFileList.filter(item => item !== id));
    setWriteForm(prev => {
      const filterImage = prev.images?.filter(image => image.id !== id);
      const newWriteForm = {
        ...prev,
        images: filterImage,
      };

      return newWriteForm;
    });
  };
  return (
    <Attachment
      handleChangeImg={handleChangeImg}
      handleClickRemoveImg={handleClickRemoveImg}
      imgFileList={writeForm.images?.filter(image => image.src !== "")}
    />
  );
};

export default AttachmentContainer;
