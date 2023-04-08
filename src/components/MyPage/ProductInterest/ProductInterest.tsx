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
import PagenationContainer from "../../Common/Pagenation/PagenationContainer";

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
  // const [likeProduct, setLikeProduct] = useState<IProductProps[]>([]);

  const product = [
    {
      badges: 5,
      brand: "그리너스",
      discountRate: 20,
      id: 1,
      price: 10400,
      summary: "그리너스의 마일드 고체치약 30정입 입니다",
      thumnail: "https://zerowasteproduct.herokuapp.com/image/product1.png",
      title: "마일드 고체치약 30정입",
    },
    {
      badges: 4,
      brand: "그리너스",
      discountRate: 20,
      id: 2,
      price: 10400,
      summary: "그리너스의 마일드 고체치약 30정입 입니다",
      thumnail: "https://zerowasteproduct.herokuapp.com/image/product2.png",
      title: "마일드 고체치약 30정입",
    },
    {
      badges: 5,
      brand: "그리너스",
      discountRate: 20,
      id: 3,
      price: 10400,
      summary: "그리너스의 마일드 고체치약 30정입 입니다",
      thumnail: "https://zerowasteproduct.herokuapp.com/image/product3.png",
      title: "마일드 고체치약 30정입",
    },
    {
      badges: 5,
      brand: "그리너스",
      discountRate: 20,
      id: 4,
      price: 10400,
      summary: "그리너스의 마일드 고체치약 30정입 입니다",
      thumnail: "https://zerowasteproduct.herokuapp.com/image/product4.png",
      title: "마일드 고체치약 30정입",
    },
    {
      badges: 4,
      brand: "그리너스",
      discountRate: 20,
      id: 5,
      price: 10400,
      summary: "그리너스의 마일드 고체치약 30정입 입니다",
      thumnail: "https://zerowasteproduct.herokuapp.com/image/product5.png",
      title: "마일드 고체치약 30정입",
    },
    {
      badges: 5,
      brand: "그리너스",
      discountRate: 20,
      id: 6,
      price: 10400,
      summary: "그리너스의 마일드 고체치약 30정입 입니다",
      thumnail: "https://zerowasteproduct.herokuapp.com/image/product6.png",
      title: "마일드 고체치약 30정입",
    },
    // {
    //   badges: 5,
    //   brand: "그리너스",
    //   discountRate: 20,
    //   id: 7,
    //   price: 10400,
    //   summary: "그리너스의 마일드 고체치약 30정입 입니다",
    //   thumnail: "/image/product3.png",
    //   title: "마일드 고체치약 30정입",
    // },
    // {
    //   badges: 5,
    //   brand: "그리너스",
    //   discountRate: 20,
    //   id: 8,
    //   price: 10400,
    //   summary: "그리너스의 마일드 고체치약 30정입 입니다",
    //   thumnail: "/image/product3.png",
    //   title: "마일드 고체치약 30정입",
    // },
    // {
    //   badges: 5,
    //   brand: "그리너스",
    //   discountRate: 20,
    //   id: 9,
    //   price: 10400,
    //   summary: "그리너스의 마일드 고체치약 30정입 입니다",
    //   thumnail: "/image/product3.png",
    //   title: "마일드 고체치약 30정입",
    // },
  ];

  const [page, setPage] = useState(1);

  // const orderListAPI = async (): Promise<void> => {
  //   try {
  //     const result = await axios.get("http://localhost:3306/like/detail?id=1&page=1");
  //     setLikeProduct(result.data);
  //   } catch {
  //     throw new Error("network error");
  //   }
  // };

  // console.log(likeProduct);

  // useEffect(() => {
  //   orderListAPI();
  // }, []);

  return (
    <ProductInterestLayout>
      <ProductInterestRow>
        <ProductInterestBox>
          <ProductInterestParagraph>관심상품</ProductInterestParagraph>
          <ProductInterestNumber>{product.length}</ProductInterestNumber>
        </ProductInterestBox>
      </ProductInterestRow>

      <ProductInterestSection>
        {product.map(product => {
          return (
            <ProductArticle key={product.id}>
              <img src={`${product.thumnail}`} />
              <ProductInfoDetailBox>
                <ProductBrand>{product.brand}</ProductBrand>
                <ProductName>{product.title}</ProductName>
                <ProductPrice>{product.price.toLocaleString()}원</ProductPrice>
                <ProductLikeCount>♥ 5</ProductLikeCount>
              </ProductInfoDetailBox>
            </ProductArticle>
          );
        })}
      </ProductInterestSection>

      <PagenationContainer page={page} changePage={setPage} totalPage={2} unit={9} />
    </ProductInterestLayout>
  );
};

export default ProductInterest;
