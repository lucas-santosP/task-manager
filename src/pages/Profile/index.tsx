import React, { useState } from "react";
import { ContainerForm } from "./styles";
import { Alert, Form, Input } from "../../components/ui";
import { PageContainer, PageTitle } from "../../styles/shared";
import { observer } from "mobx-react";
import store from "../../store";
import { toast } from "react-toastify";
import { ErrorContainer } from "../../components/ui/ErrorContainer";
import { getApiErrorMessage } from "../../utils/getApiErrorMessage";

const Profile: React.FC = () => {
  if (!store.userStore.user) {
    return <ErrorContainer message="You are not authenticated!" />;
  }

  const [userForm, setUserForm] = useState({
    name: store.userStore.user.name,
    email: store.userStore.user.email,
    password: "",
    newPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  function handleUpdateRegisterForm(event: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;
    setUserForm((prev) => ({ ...prev, [name]: value }));
  }

  async function submitForm() {
    try {
      setIsLoading(true);
      const payload = { ...userForm, _id: store.userStore.user?._id || "" };
      await store.userStore.update(payload);
      toast.success("Profile updated successfully!");
    } catch (error) {
      const errorMsg = getApiErrorMessage(error);
      toast.error(errorMsg);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <PageContainer>
      <PageTitle>Profile</PageTitle>

      <ContainerForm>
        <Alert>
          Here you can update your profile information.
          <br /> <b>Note:</b> the required fields are marked with an asterisk (*).
        </Alert>

        <Form onSubmit={submitForm} isLoading={isLoading} buttonText={"Update"}>
          <Input
            focused
            label="Name *"
            name="name"
            placeholder="Enter your name"
            value={userForm.name}
            onChange={handleUpdateRegisterForm}
          />
          <Input
            label="Email *"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={userForm.email}
            onChange={handleUpdateRegisterForm}
          />

          <Input
            label="Password *"
            type="password"
            name="password"
            placeholder="Enter your current password"
            value={userForm.password}
            onChange={handleUpdateRegisterForm}
          />

          <Input
            label="New Password "
            type="password"
            name="newPassword"
            placeholder="Enter the new password"
            value={userForm.newPassword}
            onChange={handleUpdateRegisterForm}
          />
          <small>- Only required if you want to change it.</small>
        </Form>
      </ContainerForm>
    </PageContainer>
  );
};

export default observer(Profile);
