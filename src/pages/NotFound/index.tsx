import React from "react";
import { PageContainer, PageTitle } from "../../styles/shared";
import { Link } from "../../components/ui";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const NotFound: React.FC = () => {
  return (
    <PageContainer style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <PageTitle>Page not found</PageTitle>
      <p>
        Oops, we couldn&#39;t find that page. Try going <Link to="/home">home</Link>.
      </p>
      <HiOutlineExclamationCircle size="7rem" />
    </PageContainer>
  );
};

export default NotFound;
