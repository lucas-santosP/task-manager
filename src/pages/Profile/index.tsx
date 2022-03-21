import React, { useState } from "react";
import { ContainerForm } from "./styles";
import { Alert, Form, Input } from "../../components/ui";
import { PageContainer, PageTitle } from "../../styles/shared";
import { observer } from "mobx-react";
import store from "../../store";
import { toast } from "react-toastify";

const initialUserForm = { name: "", email: "email@email.com", password: "pass" };

const Profile: React.FC = () => {
  const [userForm, setUserForm] = useState(
    store.userStore.user ? store.userStore.user : initialUserForm
  );
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleUpdateRegisterForm(event: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;
    setUserForm((prev) => ({ ...prev, [name]: value }));
  }

  async function submitForm() {
    setIsLoading(true);
    toast.warn("Feature not implemented yet");
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }

  return (
    <PageContainer>
      <PageTitle>Profile</PageTitle>

      <ContainerForm>
        <Alert>
          Here you can update your user information, keep the value you dont wanna update
        </Alert>

        <Form onSubmit={submitForm} isLoading={isLoading} buttonText={"Update"}>
          <Input
            focused
            label="Name"
            name="name"
            placeholder="Enter your name"
            value={userForm.name}
            onChange={handleUpdateRegisterForm}
          />

          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={userForm.email}
            onChange={handleUpdateRegisterForm}
          />

          <Input
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={userForm.password}
            onChange={handleUpdateRegisterForm}
          />

          <Input
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form>
      </ContainerForm>
    </PageContainer>
  );
};

export default observer(Profile);
