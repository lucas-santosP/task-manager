import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

export const BottomText = styled.span`
  width: 100%;
  text-align: center;
`;
