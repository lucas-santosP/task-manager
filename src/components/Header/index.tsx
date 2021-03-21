import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 60px;
  background-color: rebeccapurple;
  color: #fff;
  font-size: 2rem;
`;

const Header: React.FC = () => {
  return <Container>Header</Container>;
};

export default Header;
