import React, { useState } from "react";
import { PageContainer, PageTitle, CardWrapper } from "../../styles/shared";
import { Card, Form, Input, Link } from "../../components/ui";
import { useStore } from "../../store";
import { waitAsync } from "../../utils";

const bottomText = (
  <>
    Dont have account yet ? <Link to="/register">Register here.</Link>
  </>
);

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
      await waitAsync(500);
      alert(error.response.data);
      setIsLoading(false);
    }
  }

  return (
    <PageContainer>
      <PageTitle>Lucid Task</PageTitle>

      <CardWrapper>
        <Card title="Login">
          <Form
            onSubmit={submitUserForm}
            isLoading={isLoading}
            buttonText={"Login"}
            bottomText={bottomText}
          >
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
          </Form>
        </Card>
      </CardWrapper>
    </PageContainer>
  );
};

export default Login;
