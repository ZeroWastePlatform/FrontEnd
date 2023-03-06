import { conditionType, setConditionType } from "../../../../../pages/Store/ProductList";
import {
  ProductBestSortButton,
  ProductBestSortItem,
  ProductBestSortLayout,
  ProductBestSortList,
} from "./ProductBestSort.styles";
import { theme } from "../../../../../styles/theme";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import bottomArrow from "../../../../../assets/images/bottomArrow.svg";
interface ProductBestSortProps {
  condition: conditionType;
  setCondition: setConditionType;
}

const ProductBestSort = ({ condition, setCondition }: ProductBestSortProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <ProductBestSortLayout>
        <ProductBestSortButton onClick={() => setIsOpen(!isOpen)}>
          {condition.sort} <img src={bottomArrow} />
        </ProductBestSortButton>
        {isOpen ? (
          <ProductBestSortList>
            {bestSortData.map(element => (
              <ProductBestSortItem key={element} onClick={() => setCondition({ ...condition, sort: element })}>
                {element}
              </ProductBestSortItem>
            ))}
          </ProductBestSortList>
        ) : null}
      </ProductBestSortLayout>
    </ThemeProvider>
  );
};

export default ProductBestSort;

const bestSortData = ["식품", "주방", "욕실", "생활", "취미", "선물", "여성용품", "반려동물", "문구"];
