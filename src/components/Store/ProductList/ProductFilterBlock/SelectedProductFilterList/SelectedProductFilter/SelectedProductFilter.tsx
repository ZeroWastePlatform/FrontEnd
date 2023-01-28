import {
  SelectedProductFilterDeleteIcon,
  SelectedProductFilterLayout,
  SelectedProductFilterName,
} from "./SelectedProductFilter.styles";

interface SelectedProductFilterProps {
  name: string;
}

const SelectedProductFilter = ({ name }: SelectedProductFilterProps) => {
  return (
    <SelectedProductFilterLayout>
      <SelectedProductFilterName>{name}</SelectedProductFilterName>
      <SelectedProductFilterDeleteIcon>X</SelectedProductFilterDeleteIcon>
    </SelectedProductFilterLayout>
  );
};

export default SelectedProductFilter;
