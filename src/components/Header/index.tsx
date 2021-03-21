import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 80px;
  padding: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSize.lg};
`;

const Header: React.FC = () => {
  return <Container>Header</Container>;
};

export default Header;
