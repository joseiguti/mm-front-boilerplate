import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: 768px) {
    padding: 15px;
    margin: 10px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    margin: 5px;
    border: none;
  }
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing(1)};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  border: 1px solid #ccc;
  border-radius: 4px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 4px rgba(0, 112, 243, 0.3);
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.small};
    padding: ${({ theme }) => theme.spacing(0.5)};
  }
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spacing(2)};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing(1)};
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;
