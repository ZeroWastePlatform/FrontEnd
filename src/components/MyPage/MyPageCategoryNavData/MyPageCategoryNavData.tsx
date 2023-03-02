import { MyPageCategoryNavDataSection } from "./MyPageCategoryNavData.style";

interface IComponentProps {
  component: React.ReactElement;
  category: string;
  id: number;
}

interface ComponentProps {
  selectCategoryNav: string;
  selectCategoryComponentList: IComponentProps[];
}

const MyPageCategoryNavData = ({ selectCategoryComponentList, selectCategoryNav }: ComponentProps) => {
  return (
    <MyPageCategoryNavDataSection>
      {selectCategoryComponentList
        .filter(component => component.category === selectCategoryNav)
        .map(component => (
          <div key={component.id}>{component.component}</div>
        ))}
    </MyPageCategoryNavDataSection>
  );
};

export default MyPageCategoryNavData;
