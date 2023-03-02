import { ProductType } from "../../../../atom/buyForm";
import ProductCard from "../../ProductBuy/OrderProduct/ProductCard/ProductCard";
import {
  ProductListCol,
  ProductListInputBlock,
  ProductListLayout,
  ProductListNoContentButton,
  ProductListNoContentButtonText,
  ProductListNoContentLayout,
  ProductListNoContentTitle,
  ProductListRow,
} from "./ProductList.styles";
import SideBarBox from "./SideBar/SideBar";
import logoImg from "../../../../assets/images/characters-logo.png";

interface ProductListProps {
  changeProduct: (id: string | number) => void;
  changeCount: (id: string | number, type: "minus" | "plus") => void;
  data: ProductType[];
  checkAllSelected: boolean;
  changeAllCheck: () => void;
  checkList: boolean[];
  countList: number[];
  totalPrice: () => number;
  moveBuyPage: (index?: number) => void;
  deleteProduct: (id: number) => void;
}

const ProductList = ({
  changeProduct,
  changeCount,
  data,
  checkAllSelected,
  changeAllCheck,
  checkList,
  countList,
  totalPrice,
  moveBuyPage,
  deleteProduct,
}: ProductListProps) => {
  if (data.length === 0) {
    return (
      <ProductListNoContentLayout>
        <ProductListNoContentTitle>장바구니가 비었어요.</ProductListNoContentTitle>
        <img src={logoImg} />
        <ProductListNoContentButton to={"/store"}>
          <ProductListNoContentButtonText>상품 담으러 가기</ProductListNoContentButtonText>
        </ProductListNoContentButton>
      </ProductListNoContentLayout>
    );
  }
  return (
    <ProductListLayout>
      <ProductListRow>
        <ProductListCol>
          <ProductListInputBlock>
            <input type="checkbox" checked={checkAllSelected} onChange={changeAllCheck}></input>
            <i>모두 선택</i>
          </ProductListInputBlock>
          {data.map((element, index) => {
            return (
              <ProductCard
                data={{ ...element, selected: checkList[index], count: countList[index] }}
                changeProduct={changeProduct}
                changeCount={changeCount}
                key={element.id}
                index={index}
                moveBuyPage={moveBuyPage}
                deleteProduct={deleteProduct}
              />
            );
          })}
        </ProductListCol>
        <SideBarBox
          price={totalPrice()}
          count={checkList.filter(element => element).length}
          moveBuyPage={moveBuyPage}
        />
      </ProductListRow>
    </ProductListLayout>
  );
};

export default ProductList;
