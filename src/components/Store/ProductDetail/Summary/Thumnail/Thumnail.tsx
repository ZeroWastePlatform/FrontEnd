import { useState } from "react";
import {
  ThumnailBigImg,
  ThumnailBigImgBox,
  ThumnailLayout,
  ThumnailSmallImg,
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
        <ThumnailBigImg src={photos[selectedThumnail]} />
      </ThumnailBigImgBox>
      <ThumnailSmallImgBox>
        {photos.map((photo, index) => (
          <ThumnailSmallImg src={photo} key={photo} onClick={() => setSelectedThumnail(index)} />
        ))}
      </ThumnailSmallImgBox>
    </ThumnailLayout>
  );
};

export default Thumnail;
