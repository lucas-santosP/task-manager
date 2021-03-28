import React, { useState } from "react";
import { PageContainer } from "../../styles/shared";
import { Button, Card, Input, Link, HorizontalDivider } from "../../components/ui";
import { Title, CardTitle, CardWrapper, Form } from "./styles";
import { useStore } from "../../store";

const Login: React.FC = () => {
  const { login } = useStore();
  const [userForm, setUserForm] = useState({ email: "email@email.com", password: "pass" });
  const [isLoading, setIsLoading] = useState(false);

  function handleUpdateUserForm(event: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;
    setUserForm((prev) => ({ ...prev, [name]: value }));
  }

  async function submitUserForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      setIsLoading(true);
      await login(userForm);
    } catch (error) {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
      console.log(error);
    }
  }

  return (
    <PageContainer>
      <Title>Lucid Task</Title>

      <CardWrapper>
        <Card>
          <CardTitle>Welcome</CardTitle>
          <Form onSubmit={submitUserForm}>
            <Input
              label="Email"
              name="email"
              placeholder="Enter your email"
              value={userForm.email}
              onChange={handleUpdateUserForm}
            />

            <Input
              label="Password"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={userForm.password}
              onChange={handleUpdateUserForm}
            />

            <Button isLoading={isLoading} type="submit">
              Login
            </Button>

            <HorizontalDivider maxWidth={"360px"} marginY={"1.5rem"} />
            <span>
              Dont have account yet ? <Link to="/register">Register here.</Link>
            </span>
          </Form>
        </Card>
      </CardWrapper>
    </PageContainer>
  );
};

export default Login;
