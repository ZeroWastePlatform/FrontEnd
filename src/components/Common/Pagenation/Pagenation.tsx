import { PagenationLayout, PagenationMoveButton, PagenationNumberButton } from "./Pagenation.styles";

const Pagenation = ({ curpage, pagelist, movePage }: any) => {
  return (
    <PagenationLayout>
      <PagenationMoveButton>&lt;</PagenationMoveButton>
      {pagelist.map(el => {
        return (
          <PagenationNumberButton key={el} onClick={() => movePage(el)} selected={curpage === el}>
            {el}
          </PagenationNumberButton>
        );
      })}
      <PagenationMoveButton>&gt;</PagenationMoveButton>
    </PagenationLayout>
  );
};

export default Pagenation;
