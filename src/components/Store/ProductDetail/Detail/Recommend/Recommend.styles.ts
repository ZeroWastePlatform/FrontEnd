import styled from "styled-components";

export const RecommendLayout = styled.div`
  width: 100%;
  padding: 100px 0;
  margin-bottom: 300px;
`;

export const RecommendTitle = styled.div`
  max-width: 1200px;
  margin: 0 auto 40px auto;
  font-size: 24px;
  font-weight: 700;
  padding: 0 0 20px 0;
  border-bottom: 1px solid #eaeaea;
`;
export const RecommendList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
  max-width: 1200px;
  margin: auto;
`;
