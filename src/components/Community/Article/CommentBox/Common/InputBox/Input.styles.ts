import styled from "styled-components";

export const InputBoxLayout = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;
export const InputBoxMyProfileImg = styled.img`
  width: 40px;
  height: 40px;
  background-color: red;
  border-radius: 100%;
`;
export const InputBoxInput = styled.input`
  flex: 1;
  height: 50px;
  border: 2px solid ${({ theme }) => theme.colors.gray3};
  border-radius: 10px;
  padding: 0 10px;
`;
export const InputBoxButton = styled.button`
  width: 77px;
  height: 50px;
  color: white;
  background-color: ${({ theme }) => theme.colors.primaryGreen100};
  border: 0;
  border-radius: 10px;
  font-size: 18px;
`;
