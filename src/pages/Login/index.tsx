import React, { useState } from "react";
import { useLocation } from "wouter";
import { PageContainer } from "../../styles/shared";
import { Button, Card } from "../../components/ui";
import {
  Title,
  CardDivider,
  CardTitle,
  CardWrapper,
  Form,
  Input,
  InputLabel,
  StyledLink,
} from "./styles";
import ImgCardDivider from "../../assets/card-divider.png";

const Login: React.FC = () => {
  const [userForm, setUserForm] = useState({ email: "", password: "" });
  const [, setLocation] = useLocation();

  function handleUpdateUserForm(event: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;
    setUserForm((prev) => ({ ...prev, [name]: value }));
  }

  async function submitUserForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // const response = await UserServices.login(userForm);
    // console.log(response.data.user);
    setLocation("/home");
  }

  return (
    <PageContainer>
      <Title>Lucid Task</Title>

      <CardWrapper>
        <Card>
          <CardTitle>Welcome</CardTitle>
          <Form onSubmit={submitUserForm}>
            <InputLabel htmlFor="email">E-mail</InputLabel>
            <Input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={userForm.email}
              onChange={handleUpdateUserForm}
            />

            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={userForm.password}
              onChange={handleUpdateUserForm}
            />

            <Button type="submit">Login</Button>

            <CardDivider src={ImgCardDivider} alt="Divider" />
            <span>
              Dont have account yet ? <StyledLink to="/register">Register here.</StyledLink>
            </span>
          </Form>
        </Card>
      </CardWrapper>
    </PageContainer>
  );
};

export default Login;
