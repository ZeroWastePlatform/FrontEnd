import { conditionType, filterType } from "../../../../pages/Store/ProductList";
import { ProductFilterBlockCol, ProductFilterBlockLayout } from "./ProductFilterBlock.styles";
import StoreFilterRow from "./ProductFilterRow/ProductFilterRow";
import SelectedProductFilterList from "./SelectedProductFilterList/SelectedProductFilterList";

interface ProductFilterBlockProps {
  condition: conditionType;
  setCheckboxFilter: (clickedFilter: filterType) => void;
  setRadioFilter: (clickedFilter: filterType) => void;
}

const ProductFilterBlock = ({ condition, setCheckboxFilter, setRadioFilter }: ProductFilterBlockProps) => {
  return (
    <ProductFilterBlockLayout>
      <ProductFilterBlockCol>
        <StoreFilterRow
          title={"브랜드"}
          list={[
            { text: "잇츠베러", value: "0" },
            { text: "젤러스 스윗", value: "1" },
            { text: "비건 포레스트", value: "2" },
            { text: "저스트에그", value: "3" },
            { text: "비건타민", value: "4" },
            { text: "바오푸드", value: "5" },
            { text: "로마린다", value: "6" },
          ]}
          setCheckboxFilter={setCheckboxFilter}
          setRadioFilter={setRadioFilter}
        />
        <StoreFilterRow
          title={"가격"}
          list={[
            { text: "10000원이하", value: "7", name: "price" },
            { text: "10000~30000", value: "8", name: "price" },
            { text: "30000~50000", value: "9", name: "price" },
            { text: "50000이상", value: "10", name: "price" },
          ]}
          setCheckboxFilter={setCheckboxFilter}
          setRadioFilter={setRadioFilter}
        />
        <StoreFilterRow
          title={"제품상태"}
          list={[
            { text: "무료배송", value: "11" },
            { text: "할인 상품", value: "12" },
            { text: "품절상품 제외", value: "13" },
          ]}
          setCheckboxFilter={setCheckboxFilter}
          setRadioFilter={setRadioFilter}
        />
        <SelectedProductFilterList selectedFilters={condition.filter} />
      </ProductFilterBlockCol>
    </ProductFilterBlockLayout>
  );
};

export default ProductFilterBlock;
