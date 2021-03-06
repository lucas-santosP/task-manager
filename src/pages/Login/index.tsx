import React, { useState } from "react";
import store from "../../store";
import { PageContainer, CardWrapper } from "../../styles/shared";
import { Card, Form, Input, Link } from "../../components/ui";
import { toast } from "react-toastify";
import { getApiErrorMessage } from "../../utils/getApiErrorMessage";

const Login: React.FC = () => {
  const [userForm, setUserForm] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  function handleUpdateUserForm(event: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;
    setUserForm((prev) => ({ ...prev, [name]: value }));
  }

  async function submitUserForm() {
    try {
      setIsLoading(true);
      await store.userStore.login(userForm);
    } catch (error) {
      const errorMsg = getApiErrorMessage(error);
      toast.error(errorMsg);
      setIsLoading(false);
    }
  }

  return (
    <PageContainer>
      <CardWrapper style={{ position: "relative", zIndex: 5 }}>
        <Card title="Login">
          <Form
            onSubmit={submitUserForm}
            isLoading={isLoading}
            buttonText={"Login"}
            bottomText={
              <>
                Don{"'"}t have account yet ? <Link to="/register">Register here.</Link>
              </>
            }
          >
            <Input
              focused
              label="Email"
              type="email"
              name="email"
              value={userForm.email}
              autoComplete="on"
              onChange={handleUpdateUserForm}
            />

            <Input
              label="Password"
              type="password"
              name="password"
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
