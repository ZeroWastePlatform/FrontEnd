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
import thumbnail1 from "../../../../../assets/images/thumbnail1.png";
import thumbnail2 from "../../../../../assets/images/thumbnail2.png";
import thumbnail3 from "../../../../../assets/images/thumbnail3.png";
import thumbnail4 from "../../../../../assets/images/thumbnail4.png";
import thumbnail5 from "../../../../../assets/images/thumbnail5.png";
import thumbnail6 from "../../../../../assets/images/thumbnail6.png";

interface ThumnailProps {
  id: number;
  photo: string;
}

const Thumnail = ({ id, photo }: ThumnailProps) => {
  const photos = [
    `https://zerowasteproduct.herokuapp.com${photo}`,
    thumbnails[id % 6],
    thumbnails[(id % 6) + 1] && thumbnails[(id % 6) - 1],
  ];

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

const thumbnails = [thumbnail1, thumbnail2, thumbnail3, thumbnail4, thumbnail5, thumbnail6];
