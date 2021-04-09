import React, { useState } from "react";
import { PageContainer, PageTitle, CardWrapper } from "../../styles/shared";
import { Card, Form, Input, Link } from "../../components/ui";
import { useUserContext } from "../../contexts/user";
import { waitAsync } from "../../utils";

const formBottomText = (
  <>
    Already have an account ? Do <Link to="/login">login here.</Link>
  </>
);

const initialRegisterForm = {
  name: "",
  email: "email@email.com",
  password: "pass",
};

const Register: React.FC = () => {
  const { register } = useUserContext();
  const [registerForm, setRegisterForm] = useState(initialRegisterForm);
  const [isLoading, setIsLoading] = useState(false);

  function handleUpdateRegisterForm(event: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;
    setRegisterForm((prev) => ({ ...prev, [name]: value }));
  }

  async function submitRegisterForm() {
    try {
      setIsLoading(true);
      await register(registerForm);
    } catch (error) {
      await waitAsync(500);
      alert(error?.response?.data);
      setIsLoading(false);
    }
  }

  return (
    <PageContainer>
      <PageTitle align="center">Lucid Task</PageTitle>

      <CardWrapper>
        <Card title="Register">
          <Form
            onSubmit={submitRegisterForm}
            isLoading={isLoading}
            buttonText={"Register"}
            bottomText={formBottomText}
          >
            <Input
              focused
              label="Name"
              name="name"
              placeholder="Enter your name"
              value={registerForm.name}
              onChange={handleUpdateRegisterForm}
            />

            <Input
              label="Email"
              type="email"
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
          </Form>
        </Card>
      </CardWrapper>
    </PageContainer>
  );
};

export default Register;
