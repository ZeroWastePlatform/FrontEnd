import { useParams } from "react-router-dom";
import Info from "./Info";
import ProductImage1 from "../../../../../assets/images/productInfo1.png";
import ProductImage2 from "../../../../../assets/images/productInfo2.png";
import ProductImage3 from "../../../../../assets/images/productInfo3.png";
import ProductImage4 from "../../../../../assets/images/productInfo4.png";
interface InfoContainerProps {
  infoRef: React.RefObject<HTMLDivElement>;
}

const InfoContainer = ({ infoRef }: InfoContainerProps) => {
  const { id } = useParams();
  return <Info image={images[Number(id) % 3]} infoRef={infoRef} />;
};

export default InfoContainer;

const images = [ProductImage1, ProductImage2, ProductImage3, ProductImage4];
