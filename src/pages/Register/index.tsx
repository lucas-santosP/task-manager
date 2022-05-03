import React, { useState } from "react";
import { PageContainer, PageTitle, CardWrapper } from "../../styles/shared";
import { Card, Form, Input, Link } from "../../components/ui";
import store from "../../store";
import { toast } from "react-toastify";
import { getApiErrorMessage } from "../../utils/getApiErrorMessage";

const initialRegisterForm = {
  name: "",
  email: "",
  password: "",
};

const Register: React.FC = () => {
  const [registerForm, setRegisterForm] = useState(initialRegisterForm);
  const [isLoading, setIsLoading] = useState(false);

  function handleUpdateRegisterForm(event: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;
    setRegisterForm((prev) => ({ ...prev, [name]: value }));
  }

  async function submitRegisterForm() {
    try {
      setIsLoading(true);
      await store.userStore.register(registerForm);
    } catch (error) {
      const errorMsg = getApiErrorMessage(error);
      toast.error(errorMsg);
      setIsLoading(false);
    }
  }

  return (
    <PageContainer>
      <CardWrapper>
        <Card title="Register">
          <Form
            onSubmit={submitRegisterForm}
            isLoading={isLoading}
            buttonText={"Register"}
            bottomText={
              <>
                Already have an account ? <Link to="/login">Login here.</Link>
              </>
            }
          >
            <Input
              focused
              label="Name"
              name="name"
              value={registerForm.name}
              onChange={handleUpdateRegisterForm}
            />

            <Input
              label="Email"
              type="email"
              name="email"
              value={registerForm.email}
              onChange={handleUpdateRegisterForm}
            />

            <Input
              label="Password"
              type="password"
              name="password"
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
