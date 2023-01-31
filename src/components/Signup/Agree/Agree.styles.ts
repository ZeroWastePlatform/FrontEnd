import styled from "styled-components";

export const AgreeLayout = styled.div`
  padding-top: 30px;
`;

export const AgreeTitle = styled.p`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray9};
  padding-bottom: 20px;
`;

export const AgreeBox = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray4};
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
`;

export const AgreeSelectAll = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray2};
`;

export const AgreeSelectAllInput = styled.input`
  margin-right: 8px;
`;

export const AgreeSelectAllLabel = styled.label`
  padding-top: 2px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;

export const AgreeSelectAllText = styled.span`
  padding-top: 2px;
  padding-left: 5px;
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray6};
`;

export const AgreeSelectList = styled.ul`
  padding-top: 10px;
`;

export const AgreeSelectItem = styled.li`
  display: flex;
  align-items: center;
  padding: 7px 0;
`;

export const AgreeSelectInput = styled.input`
  margin-right: 8px;
`;

export const AgreeSelectLabel = styled.label`
  padding-top: 2px;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
`;

export const AgreeSelectText = styled(AgreeSelectLabel)<{ color: string }>`
  padding-left: 5px;
  color: ${({ color }) => color};
`;
