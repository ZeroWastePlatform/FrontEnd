import styled from "styled-components";

export const ProductFilterRowLayout = styled.div`
  display: flex;
  height: 50px;
  border-bottom: 1px solid #eaeaea;
`;

<<<<<<< HEAD
export const ProductFilterRowTitle = styled.div`
  min-width: 100px;
=======
export const ProductFilterRowTitle = styled.div<{ wrap: string }>`
  width: 100px;
  margin-right: ${({ wrap }) => (wrap === "true" ? "55px" : 0)};
>>>>>>> develop
  font-weight: 600;
  display: flex;
  align-items: center;
`;

export const ProductFilterRowList = styled.ul`
  display: flex;
  gap: 10px;
<<<<<<< HEAD
  overflow: auto;
  white-space: nowrap;
=======
  white-space: nowrap;
  overflow: scroll;
>>>>>>> develop
`;
