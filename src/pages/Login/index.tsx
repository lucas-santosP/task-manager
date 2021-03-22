import React from "react";
import { Link } from "wouter";
import { PageContainer } from "../../styles/shared";

const Login: React.FC = () => {
  return (
    <PageContainer>
      <h1>Login</h1>
      <br />
      <Link to="/home">Go to home</Link>
    </PageContainer>
  );
};

export default Login;
