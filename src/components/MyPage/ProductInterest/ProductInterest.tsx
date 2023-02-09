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

const ProductInterest = () => {
  return (
    <ProductInterestLayout>
      <ProductInterestRow>
        <ProductInterestBox>
          <ProductInterestParagraph>관심상품</ProductInterestParagraph>
          <ProductInterestNumber>13</ProductInterestNumber>
        </ProductInterestBox>
        <EditButon>편집</EditButon>
      </ProductInterestRow>

      <ProductInterestSection>
        <ProductArticle>
          <img src="" alt="" />
          <ProductInfoDetailBox>
            <ProductBrand>동구밭</ProductBrand>
            <ProductName>올바른 샴푸바 쿨링용</ProductName>
            <ProductPrice>9,500원</ProductPrice>
            <ProductLikeCount>♥ 1,234</ProductLikeCount>
          </ProductInfoDetailBox>
        </ProductArticle>

        <ProductArticle>
          <img src="" alt="" />
          <ProductInfoDetailBox>
            <ProductBrand>동구밭</ProductBrand>
            <ProductName>올바른 샴푸바 쿨링용</ProductName>
            <ProductPrice>9,500원</ProductPrice>
            <ProductLikeCount>♥ 1,234</ProductLikeCount>
          </ProductInfoDetailBox>
        </ProductArticle>

        <ProductArticle>
          <img src="" alt="" />
          <ProductInfoDetailBox>
            <ProductBrand>동구밭</ProductBrand>
            <ProductName>올바른 샴푸바 쿨링용</ProductName>
            <ProductPrice>9,500원</ProductPrice>
            <ProductLikeCount>♥ 1,234</ProductLikeCount>
          </ProductInfoDetailBox>
        </ProductArticle>
      </ProductInterestSection>
    </ProductInterestLayout>
  );
};

export default ProductInterest;
