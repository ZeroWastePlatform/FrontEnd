import styled from "styled-components";

export const AskItemLayout = styled.div`
  display: flex;
  border-bottom: 1px solid #eaeaea;
  padding: 45px 0;
`;

export const AskItemOrder = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: gray;
  margin-right: 30px;
  padding: 10px 0;
  width: 65px;
`;

export const AskItemTypeTitleBox = styled.div`
  display: flex;
  gap: 10px;
  min-width: 400px;
  flex-grow: 2;
`;

export const AskItemCategory = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  padding: 10px 0;
  & > img {
    margin-right: 10px;
    top: 0;
  }
`;

export const AskItemTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  padding: 10px 0;
`;

export const AskItemAskChecked = styled.div`
  height: 38px;
  width: 80px;
  border-radius: 10px;
  padding: 5px 10px 5px 10px;
  background-color: #efefef;
  color: #797979;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  font-size: 14px;
  font-weight: 700;
`;

export const AskItemUserId = styled.div`
  display: flex;
  border-bottom: 1px sold #eaeaea;
  padding: 10px 0;
  min-width: 80px;
  font-size: 20px;
  font-weight: 400;
  color: #797979;
`;

export const AskItemDate = styled.div`
  display: flex;
  border-bottom: 1px sold #eaeaea;
  padding: 10px 0;
  font-size: 20px;
  font-weight: 400;
  color: #797979;
`;

export const AskItemDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.gray1};
  padding: 13px 100px;
`;

export const AskItemDetailSubBox = styled.div`
  padding: 37px 0;
  & + & {
    border-top: 1px solid #d9d9d9;
  }
`;

export const AskItemDetailTitle = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 30px;
  & > i {
    font-weight: 700;
  }
`;
export const AskItemDetailContent = styled.pre`
  display: flex;
  border-bottom: 1px sold #eaeaea;
  line-height: 1.55;
  font-size: 20px;
`;
