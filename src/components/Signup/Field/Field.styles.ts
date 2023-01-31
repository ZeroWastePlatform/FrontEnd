import styled from "styled-components";

export const SignupInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 80px;
  margin-bottom: 40px;
`;

export const SignupInputTitle = styled.p`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray9};
`;

export const SignupInputDescription = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray6};
`;

export const SignupInput = styled.input`
  width: 100%;
  padding: 10px 20px 10px 10px;
  color: ${({ theme }) => theme.colors.gray6};
  border: 1px solid ${({ theme }) => theme.colors.gray4};
  border-radius: 8px;
`;

export const CertificationBox = styled.div`
  margin-left: auto;
`;

export const CertificationButton = styled.button`
  padding: 10px 30px;
  border: 0;
  background-color: ${({ theme }) => theme.colors.gray2};
  border-radius: 10px;
  color: #ffffff;
`;
