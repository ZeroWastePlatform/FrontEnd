import { conditionType } from "../../../../pages/Store/ProductList";
import { ProductFilterBlockCol, ProductFilterBlockLayout } from "./ProductFilterBlock.styles";
import { filter } from "./ProductFilterBlockContainer";
import filterList from "./ProductFilterData";
import StoreFilterRow from "./ProductFilterRow/ProductFilterRow";

interface ProductFilterBlockProps {
  condition: conditionType;
  setFilter: (clickedFilter: filter) => void;
  isSelected: (name: string, value: string) => boolean;
}

const ProductFilterBlock = ({ setFilter, isSelected }: ProductFilterBlockProps) => {
  return (
    <ProductFilterBlockLayout>
      <ProductFilterBlockCol>
        <StoreFilterRow
          title={"브랜드"}
          list={[
            { text: "이크", value: "이크" },
            { text: "탄소창고", value: "탄소창고" },
            { text: "지구샵", value: "지구샵" },
            { text: "잇츠베러", value: "잇츠베러" },
            { text: "소락", value: "소락" },
            { text: "비건포레스트", value: "비건포레스트" },
            { text: "닥터노아", value: "닥터노아" },
            { text: "노플라스틱선데이", value: "노플라스틱선데이" },
            { text: "빌리스벳", value: "빌리스벳" },
            { text: "플레시버블", value: "플레시버블" },
            { text: "꽃마리협동조합", value: "꽃마리협동조합" },
            { text: "동구밭", value: "동구밭" },
            { text: "클로에코", value: "클로에코" },
            { text: "씨드키퍼", value: "씨드키퍼" },
            { text: "그리너스", value: "그리너스" },
            { text: "밀키프로젝트", value: "밀키프로젝트" },
            { text: "프로젝트 1907", value: "프로젝트 1907" },
            { text: "곡물집", value: "곡물집" },
            { text: "파이토플레이트", value: "파이토플레이트" },
            { text: "아로마티카", value: "아로마티카" },
            { text: "toun 28", value: "toun 28" },
            { text: "허블룸", value: "허블룸" },
            { text: "빌리스뱃", value: "빌리스뱃" },
            { text: "티읕", value: "티읕" },
          ]}
          selectedCheck={selectedCheck}
          setCheckboxFilter={setCheckboxFilter}
          setRadioFilter={setRadioFilter}
        />
        <StoreFilterRow
          title={"가격"}
          list={[
            { text: "10,000원 이하", value: "10,000원 이하", name: "price" },
            { text: "10,000원 ~ 30,000원", value: "10,000원 ~ 30,000원", name: "price" },
            { text: "30,000원 ~ 50,000원", value: "30,000원 ~ 50,000원", name: "price" },
            { text: "50,000원 이상", value: "50,000원 이상", name: "price" },
          ]}
          selectedCheck={selectedCheck}
          setCheckboxFilter={setCheckboxFilter}
          setRadioFilter={setRadioFilter}
        />
        <StoreFilterRow
          title={"제품상태"}
          list={[{ text: "할인 상품", value: "할인 상품" }]}
          selectedCheck={selectedCheck}
          setCheckboxFilter={setCheckboxFilter}
          setRadioFilter={setRadioFilter}
        />
        <SelectedProductFilterList
          selectedFilters={condition.filter}
          deleteFilter={deleteFilter}
          resetFilter={resetFilter}
        />
      </ProductFilterBlockCol>
    </ProductFilterBlockLayout>
  );
};

export default ProductFilterBlock;
