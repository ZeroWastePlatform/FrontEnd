import StoreSort from "./ProductSort/ProductSort";
import {
  ProductCardListGrid,
  ProductCardListLayout,
  ProductCardListNoResultLayout,
  ProductCardListNoResultTitle,
  ProductCardListTopBox,
  ProductCardListTotalText,
} from "./ProductCardList.styles";
import ProductCard from "../../Common/ProductCard/ProductCard";
import { conditionType, setConditionType } from "../../../../pages/Store/ProductList";
import { ProductCardListDataType } from "./ProductCardListContainer";
import ProductBestSort from "./ProductBestSort/ProductBestSort";
import PagenationContainer from "../../../Common/Pagenation/PagenationContainer";
import characterLogo from "../../../../assets/images/characters-logo.png";

interface ProductCardListProps {
  data: ProductCardListDataType;
  condition: conditionType;
  setCondition: setConditionType;
  setPage: (page: number) => void;
  likeData: number[];
  changeLike: any;
}

const ProductCardList = ({ data, condition, setCondition, setPage, likeData, changeLike }: ProductCardListProps) => {
  console.log(data);
  return (
    <ProductCardListLayout>
      <ProductCardListTopBox>
        <ProductCardListTotalText>
          {condition.category === "TOP6" ? "베스트순" : `전체 ${data.totalElements}개`}
        </ProductCardListTotalText>
        {condition.category === "TOP6" ? (
          <ProductBestSort condition={condition} setCondition={setCondition} />
        ) : (
          <StoreSort condition={condition} setCondition={setCondition} />
        )}
      </ProductCardListTopBox>
      {data.totalElements === 0 ? (
        <ProductCardListNoResultLayout>
          <ProductCardListNoResultTitle>상품을 찾을수 없어요</ProductCardListNoResultTitle>
          <img src={characterLogo}></img>
        </ProductCardListNoResultLayout>
      ) : (
        <ProductCardListGrid>
          {(condition.category === "TOP6" ? data.content.slice(0, 6) : data.content).map((content, index) => (
            <ProductCard
              {...content}
              key={content.id}
              order={condition.category === "TOP6" && index < 3 ? index + 1 : 0}
              liked={false}
              changeLike={changeLike}
            />
          ))}
        </ProductCardListGrid>
      )}
      {condition.category === "TOP6" ? null : (
        <PagenationContainer
          page={condition.page}
          setPage={setPage}
          totalPage={Math.ceil(data.totalElements / 9)}
          unit={9}
        />
      )}
    </ProductCardListLayout>
  );
};

export default ProductCardList;
