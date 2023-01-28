import styled from "styled-components";

export const AskItemLayout = styled.div`
  display: flex;
  border-bottom: 1px solid #eaeaea;
  padding: 10px 0;
`;

export const AskItemOrder = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: gray;
  margin-right: 30px;
  padding: 10px 0;
`;

export const AskItemTypeTitleBox = styled.div`
  display: flex;
  gap: 10px;
  min-width: 400px;
  flex-grow: 2;
`;

export const AskItemCategory = styled.div`
  font-size: 18px;
  font-weight: 600;
  padding: 10px 0;
`;

export const AskItemTitle = styled.div`
  font-size: 17px;
  padding: 10px 0;
`;

export const AskItemUserId = styled.div`
  display: flex;
  border-bottom: 1px sold #eaeaea;
  padding: 10px 0;
  min-width: 80px;
`;

export const AskItemDate = styled.div`
  display: flex;
  border-bottom: 1px sold #eaeaea;
  padding: 10px 0;
`;

export const AskItemDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #efefef;
  padding: 20px 50px;
`;

export const AskItemDetailSubBox = styled.div`
  padding: 10px;
  & + & {
    border-top: 1px solid #d9d9d9;
  }
`;

export const AskItemDetailTitle = styled.div`
  display: flex;
  border-bottom: 1px sold #eaeaea;
  padding: 10px 0;
  & > i {
    color: #797979;
    margin: 0 5px 0 0;
  }
`;

export const AskItemDetailContent = styled.div`
  display: flex;
  border-bottom: 1px sold #eaeaea;
  padding: 10px 0;
  line-height: 1.55;
`;
