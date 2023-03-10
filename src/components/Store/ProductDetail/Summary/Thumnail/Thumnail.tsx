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

import empty from "../../../../../assets/images/characters-logo.png";

interface ThumnailProps {
  photo: string;
}

const Thumnail = ({ photo }: ThumnailProps) => {
  const photos = [`https://zerowasteproduct.herokuapp.com${photo}`, empty];

  const [selectedThumnail, setSelectedThumnail] = useState(0);
  return (
    <ThumnailLayout>
      <ThumnailBigImgBox>
        <ThumnailBigImgBlock>
          <ThumnailBigImg src={selectedThumnail === 0 ? `https://zerowasteproduct.herokuapp.com${photo}` : empty} />
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
