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
  changeLike: (productId: number) => Promise<void>;
}

const ProductCardList = ({ data, condition, setCondition, setPage, likeData, changeLike }: ProductCardListProps) => {
  return (
    <ProductCardListLayout>
      <ProductCardListTopBox>
        <ProductCardListTotalText>
          {condition.category === "베스트" ? "베스트순" : `전체 ${data.count}개`}
        </ProductCardListTotalText>
        {condition.category === "베스트" ? (
          <ProductBestSort condition={condition} setCondition={setCondition} />
        ) : (
          <StoreSort condition={condition} setCondition={setCondition} />
        )}
      </ProductCardListTopBox>
      {data.count === 0 ? (
        <ProductCardListNoResultLayout>
          <ProductCardListNoResultTitle>상품을 찾을수 없어요</ProductCardListNoResultTitle>
          <img src={characterLogo}></img>
        </ProductCardListNoResultLayout>
      ) : (
        <ProductCardListGrid>
          {(condition.category === "베스트" ? data.rows.slice(0, 6) : data.rows).map((content, index) => (
            <ProductCard
              {...content}
              key={content.id}
              order={condition.category === "베스트" && index < 3 ? index + 1 : 0}
              liked={likeData.indexOf(content.id) !== -1}
              changeLike={changeLike}
            />
          ))}
        </ProductCardListGrid>
      )}
      {condition.category === "베스트" ? null : (
        <PagenationContainer page={condition.page} setPage={setPage} totalPage={Math.ceil(data.count / 9)} unit={9} />
      )}
    </ProductCardListLayout>
  );
};

export default ProductCardList;
