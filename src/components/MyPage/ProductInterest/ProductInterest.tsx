import axios from "axios";
import { useEffect, useState } from "react";

import {
  EditButon,
  ProductArticle,
  ProductBrand,
  ProductInfoDetailBox,
  ProductInterestBox,
  ProductInterestLayout,
  ProductInterestNumber,
  ProductInterestParagraph,
  ProductInterestRow,
  ProductInterestSection,
  ProductLikeCount,
  ProductName,
  ProductPrice,
} from "./ProductInterest.style";

interface IProductProps {
  brand: string;
  discountRate: number;
  id: number;
  price: number;
  thumnail: string;
  title: string;
  productLike: string[];
}

const ProductInterest = () => {
  const [likeProduct, setLikeProduct] = useState<IProductProps[]>([]);

  const orderListAPI = async (): Promise<void> => {
    try {
      const result = await axios.get("http://localhost:3306/like/detail?id=1&page=1");
      setLikeProduct(result.data);
    } catch {
      throw new Error("network error");
    }
  };

  useEffect(() => {
    orderListAPI();
  }, []);

  return (
    <ProductInterestLayout>
      <ProductInterestRow>
        <ProductInterestBox>
          <ProductInterestParagraph>관심상품</ProductInterestParagraph>
          <ProductInterestNumber>{likeProduct.length}</ProductInterestNumber>
        </ProductInterestBox>
      </ProductInterestRow>

      <ProductInterestSection>
        {likeProduct.map(product => {
          return (
            <ProductArticle key={product.id}>
              <img src={`http://localhost:3306${product.thumnail}`} />
              <ProductInfoDetailBox>
                <ProductBrand>{product.brand}</ProductBrand>
                <ProductName>{product.title}</ProductName>
                <ProductPrice>{product.price.toLocaleString()}원</ProductPrice>
                <ProductLikeCount>♥ {product.productLike.length}</ProductLikeCount>
              </ProductInfoDetailBox>
            </ProductArticle>
          );
        })}
      </ProductInterestSection>
    </ProductInterestLayout>
  );
};

export default ProductInterest;
