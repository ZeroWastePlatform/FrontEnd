import { SubTitleLayout, SubTitleTitle } from "./SubTitle.styles";

interface SubTitleProps {
  children: string;
}

const SubTitle = ({ children }: SubTitleProps) => {
  return (
    <SubTitleLayout>
      <SubTitleTitle>{children}</SubTitleTitle>
    </SubTitleLayout>
  );
};

export default SubTitle;
