import CategoryItem from "./CategoryItem/CategoryItem";
import { ProductCategoryLayout, ProductCategoryList } from "./ProductCategory.styles";
import { ICategoryList } from "../../../types/index";
import Header from "../Common/Header/Header";

interface ProductCategoryProps {
  categoryList: ICategoryList[];
}

const ProductCategory = ({ categoryList }: ProductCategoryProps) => {
  return (
    <ProductCategoryLayout>
      <Header title="제품 카테고리" />
      <ProductCategoryList>
        {categoryList.map((item, idx) => (
          <CategoryItem key={idx} category={item} />
        ))}
      </ProductCategoryList>
    </ProductCategoryLayout>
  );
};

export default ProductCategory;
