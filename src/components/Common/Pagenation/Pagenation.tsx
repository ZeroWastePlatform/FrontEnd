import {
  PagenationLayout,
  PagenationMoveButton,
  PagenationMoveButtonIcon,
  PagenationNumberButton,
} from "./Pagenation.styles";
import rightArrow from "../../../assets/images/rightArrow.svg";
import leftArrow from "../../../assets/images/leftArrow.svg";
interface PagenationProps {
  page: number;
  moveLeft: boolean;
  moveRight: boolean;
  pageList: number[];
  changePage: (page: number) => void;
}

const Pagenation = ({ page, moveLeft, moveRight, pageList, changePage }: PagenationProps) => {
  return (
    <PagenationLayout>
      <PagenationMoveButton active={moveLeft}>
        <PagenationMoveButtonIcon src={leftArrow} />
      </PagenationMoveButton>
      {pageList.map(num => {
        return (
          <PagenationNumberButton key={num} onClick={() => changePage(num)} selected={page === num}>
            {num}
          </PagenationNumberButton>
        );
      })}
      <PagenationMoveButton active={moveRight}>
        <PagenationMoveButtonIcon src={rightArrow} />
      </PagenationMoveButton>
    </PagenationLayout>
  );
};

export default Pagenation;
