import styled from "styled-components";

export const SignupLayout = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

export const SignupSubmit = styled.button`
  display: block;
  margin: 0 auto;
  margin-top: 30px;
  background-color: ${({ theme }) => theme.colors.primaryGreen100};
  border: 0;
  padding: 20px 174px;
  color: #ffffff;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 500;
`;
