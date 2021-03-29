import React, { useState } from "react";
import { PageContainer } from "../../styles/shared";
import { Button, Card, Input, Link, HorizontalDivider } from "../../components/ui";
import { Title, CardTitle, CardWrapper, Form } from "./styles";
import { useStore } from "../../store";
import { waitAsync } from "../../utils";

const Register: React.FC = () => {
  const { register } = useStore();
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "email@email.com",
    password: "pass",
  });
  const [isLoading, setIsLoading] = useState(false);

  function handleUpdateRegisterForm(event: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;
    setRegisterForm((prev) => ({ ...prev, [name]: value }));
  }

  async function submitRegisterForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      setIsLoading(true);
      await register(registerForm);
    } catch (error) {
      await waitAsync(500);
      alert(error.response.data);
      setIsLoading(false);
    }
  }

  return (
    <PageContainer>
      <Title>Lucid Task</Title>

      <CardWrapper>
        <Card>
          <CardTitle>Register</CardTitle>
          <Form onSubmit={submitRegisterForm}>
            <Input
              label="Name"
              name="name"
              placeholder="Enter your name"
              value={registerForm.name}
              onChange={handleUpdateRegisterForm}
            />

            <Input
              label="Email"
              name="email"
              placeholder="Enter your email"
              value={registerForm.email}
              onChange={handleUpdateRegisterForm}
            />

            <Input
              label="Password"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={registerForm.password}
              onChange={handleUpdateRegisterForm}
            />

            <Button isLoading={isLoading} type="submit">
              Register
            </Button>

            <HorizontalDivider maxWidth={"360px"} marginY={"1.5rem"} />
            <span>
              Already have an account ? Do <Link to="/login">login here.</Link>
            </span>
          </Form>
        </Card>
      </CardWrapper>
    </PageContainer>
  );
};

export default Register;
