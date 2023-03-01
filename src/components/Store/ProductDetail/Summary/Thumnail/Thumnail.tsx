import { useState } from "react";
import {
  ThumnailBigImg,
  ThumnailBigImgBlock,
  ThumnailBigImgBox,
  ThumnailLayout,
  ThumnailSmallImg,
  ThumnailSmallImgBlock,
  ThumnailSmallImgBox,
} from "./Thumnail.styles";

interface ThumnailProps {
  photos: string[];
}

const Thumnail = ({ photos }: ThumnailProps) => {
  const [selectedThumnail, setSelectedThumnail] = useState(0);
  return (
    <ThumnailLayout>
      <ThumnailBigImgBox>
        <ThumnailBigImgBlock>
          <ThumnailBigImg src={photos[selectedThumnail]} />
        </ThumnailBigImgBlock>
      </ThumnailBigImgBox>
      <ThumnailSmallImgBox>
        {photos.map((photo, index) => (
          <ThumnailSmallImgBlock key={photo} selected={selectedThumnail === index}>
            <ThumnailSmallImg src={photo} key={photo} onMouseOver={() => setSelectedThumnail(index)} />
          </ThumnailSmallImgBlock>
        ))}
      </ThumnailSmallImgBox>
    </ThumnailLayout>
  );
};

export default Thumnail;
