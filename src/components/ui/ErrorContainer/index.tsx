import React from "react";
import { PageContainer, PageTitle } from "../../../styles/shared";
import { Link } from "../index";
import { HiOutlineExclamationCircle } from "react-icons/hi";

type IProps = {
  message: string;
};

const ErrorContainer: React.FC<IProps> = ({ message }) => {
  return (
    <PageContainer style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <PageTitle> {message}</PageTitle>
      <p>
        Go back to the <Link to="/home">home</Link>.
      </p>
      <HiOutlineExclamationCircle size="7rem" />
    </PageContainer>
  );
};

export { ErrorContainer };
