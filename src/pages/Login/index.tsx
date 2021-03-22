import React from "react";
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
  const [, setLocation] = useLocation();

  return (
    <PageContainer>
      <Title>Lucid Task</Title>

      <CardWrapper>
        <Card>
          <CardTitle>Welcome</CardTitle>
          <Form action="#">
            <InputLabel htmlFor="email">E-mail</InputLabel>
            <Input type="text" id="email" placeholder="Enter your email" />

            <InputLabel htmlFor="passowrd">Password</InputLabel>
            <Input type="password" id="passowrd" placeholder="Enter your password" />

            <Button type="submit" onClick={() => setLocation("/home")}>
              Login
            </Button>

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
