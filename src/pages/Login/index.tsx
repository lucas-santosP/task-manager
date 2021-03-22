import React from "react";
import { Link } from "wouter";

const Login: React.FC = () => {
  return (
    <div>
      <h1>Login</h1>

      <Link to="/home" style={{ color: "lightblue" }}>
        Go to home
      </Link>
    </div>
  );
};

export default Login;
