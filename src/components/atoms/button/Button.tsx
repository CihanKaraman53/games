import { FC } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  height: 40px;
  width: 185px;
  border-width: 0;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  font-size: 16px;
  letter-spacing: 0.57px;
  font-weight: 700;

  &:hover {
    cursor: pointer;
  }
`;

interface ButtonProps {
  text: string;
  onClick(): void;
}

const Button: FC<ButtonProps> = ({ text, onClick }) => (
  <StyledButton onClick={onClick}>{text}</StyledButton>
);

export default Button;
