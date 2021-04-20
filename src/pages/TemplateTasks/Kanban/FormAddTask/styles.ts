import styled from "styled-components";
import { Form } from "../../../../components/ui";

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 1rem;

  .btn-group {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    width: 100%;

    button {
      width: 100%;
    }
  }
`;
