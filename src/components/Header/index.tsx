import React from "react";
import styled from "styled-components";
import { shade } from "polished";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  padding: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSize.md};
`;

const ButtonSwitch = styled.button`
  padding: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => shade(0.2, theme.colors.primary)};
  border: 2px solid transparent;
  transition: all ease 0.3s;
  :hover {
    border: 2px solid ${({ theme }) => shade(0.2, theme.colors.primary)};
    background-color: ${({ theme }) => shade(0.1, theme.colors.primary)};
  }
`;

interface IProps {
  toggleTheme(): void;
}

const Header: React.FC<IProps> = (props) => {
  const { toggleTheme } = props;

  return (
    <Container>
      <nav>Header</nav>
      <ButtonSwitch onClick={toggleTheme}>Switch theme</ButtonSwitch>
    </Container>
  );
};

export default Header;
