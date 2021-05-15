import React from "react";
import styled from "styled-components";
import { Link as WouterLink } from "wouter";

interface IProps {
  to: string;
}

const StyledLink = styled(WouterLink)`
  color: ${({ theme }) => theme.colors.highlight};
`;

const Link: React.FC<IProps> = (props) => {
  const { children, to } = props;

  return <StyledLink to={to}>{children}</StyledLink>;
};

export default Link;
