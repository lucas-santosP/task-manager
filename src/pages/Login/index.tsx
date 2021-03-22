import React from "react";
import BaseLayout from "../../components/layout/BaseLayout";
import { Link } from "wouter";

const Login: React.FC = () => {
  return (
    <BaseLayout>
      <h1>Login</h1>

      <Link to="/home" style={{ color: "lightblue" }}>
        Go to home
      </Link>
    </BaseLayout>
  );
};

export default Login;
