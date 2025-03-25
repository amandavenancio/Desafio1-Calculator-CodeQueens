import { styled } from "styled-components";

const Button = styled.button`
  width: 48%;
  padding: 10px;
  margin-top: 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
`;

const CalculateButton = styled(Button)`
  background-color: #007bff;
  color: white;
  &:hover {
    background-color: #0056b3;
  }
`;

const ClearButton = styled(Button)`
  background-color: #dc3545;
  color: white;
  &:hover {
    background-color: #a71d2a;
  }
`;

type ButtonProps = {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
};

export const CalcButton: React.FC<ButtonProps> = ({ onClick, disabled, children }) => (
  <CalculateButton onClick={onClick} disabled={disabled}>{children}</CalculateButton>
);

export const ResetButton: React.FC<ButtonProps> = ({ onClick, children }) => (
  <ClearButton onClick={onClick}>{children}</ClearButton>
);
