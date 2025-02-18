import React, { useState } from 'react';
import { Container, Icon, FlexBox, LoginDiv, AdminDashBoard, Title, Paragraph, Link, InputContainer, InputIcon, Input, InputNoIcon, FloatingLabel, FloatingLabelNoIcon, Button, FlexRow, TimeInfo, LoginForm, AdminForm } from './style';
import { CiMail as MailIcon } from "react-icons/ci";
import { MdOutlineLockOpen as LockIcon } from "react-icons/md";
import { FaRegClock as ClockIcon} from "react-icons/fa6";

const LogIn = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [adminUsername, setAdminUsername] = useState('');
  const [adminPassword, setAdminPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Your login logic here
    alert("Logged In!");
  };

  return (
    <Container>
      <Icon src="/src/assets/the-news-logo.webp" alt="The News" />
      <FlexBox>
        <LoginDiv>
          <TimeInfo> <ClockIcon />sempre às 06:06 manhã</TimeInfo>
          <Title>acompanhe suas estatísticas e streak do The News!</Title>
          <Paragraph>digite seu email cadastrado:</Paragraph>
          <LoginForm onSubmit={handleLogin}>
            <InputContainer>
              <InputIcon>
                <MailIcon />
              </InputIcon>
              <Input
                type="email"
                placeholder=" "
                value={loginEmail}
                required
                onChange={(e) => setLoginEmail(e.target.value)}
              />
              <FloatingLabel>seu email cadastrado</FloatingLabel>
            </InputContainer>
            <Button type="submit">Login</Button>
          </LoginForm>
          <Link href="https://thenews.waffle.com.br/" target="_blank">não é cadastrado?</Link>
        </LoginDiv>
        <AdminDashBoard>
          <FlexRow>
            <LockIcon />
            <h2>Dashboard Administrativo</h2>
          </FlexRow>
          <AdminForm onSubmit={handleLogin}>
            <InputContainer>
              <InputNoIcon
                type="text"
                placeholder=" "
                value={adminUsername}
                required
                onChange={(e) => setAdminUsername(e.target.value)}
              />
              <FloatingLabelNoIcon>Nome de usuário</FloatingLabelNoIcon>
            </InputContainer>
            <InputContainer>
              <InputNoIcon
                type="password"
                placeholder=" "
                value={adminPassword}
                required
                onChange={(e) => setAdminPassword(e.target.value)}
              />
              <FloatingLabelNoIcon>Sua senha</FloatingLabelNoIcon>
            </InputContainer>
            <Button type="submit">Login</Button>
          </AdminForm>
        </AdminDashBoard>
      </FlexBox>
    </Container>
  );
};

export default LogIn;