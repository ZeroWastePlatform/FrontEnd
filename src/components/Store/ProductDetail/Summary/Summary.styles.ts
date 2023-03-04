import styled from "styled-components";

export const SummaryLayout = styled.div`
  width: 100%;
  margin: 126px 0 144px 0;
`;

export const SummaryRow = styled.div`
  display: flex;
  width: 1320px;
  gap: 60px;
  margin: auto;
  @media screen and (max-width: 1320px) {
    width: calc(100% - 40px);
  }
`;
