import React, { useState } from 'react';
import { Container, Icon, FlexBox, Title, Paragraph, Link, Form, InputContainer, InputIcon, Input, InputNoIcon, FloatingLabel, FloatingLabelNoIcon, Button, FlexRow, LoginDiv, AdminDashBoard } from './style';
import { CiMail as MailIcon } from "react-icons/ci";
import { MdOutlineLockOpen as LockIcon } from "react-icons/md";

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
          <span>sempre às 06:06 manhã</span>
          <Title>acompanhe suas estatísticas e streak do The News!</Title>
          <Paragraph>digite seu email cadastrado:</Paragraph>
          <Link href="https://thenews.waffle.com.br/" target="_blank">não é cadastrado?</Link>
          <Form onSubmit={handleLogin}>
            <InputContainer>
              <InputIcon>
                <MailIcon />
              </InputIcon>
              <Input
                type="email"
                placeholder=" "
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <FloatingLabel>seu email cadastrado</FloatingLabel>
            </InputContainer>
            <Button type="submit">Login</Button>
          </Form>
        </LoginDiv>
        <AdminDashBoard>
          <FlexRow>
            <LockIcon />
            <Title>Dashboard Administrativo</Title>
          </FlexRow>
          <Form onSubmit={handleLogin}>
            <InputContainer>
              <InputNoIcon
                type="text"
                placeholder=" "
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <FloatingLabelNoIcon>usuário</FloatingLabelNoIcon>
            </InputContainer>
            <InputContainer>
              <InputNoIcon
                type="password"
                placeholder=" "
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <FloatingLabelNoIcon>senha</FloatingLabelNoIcon>
            </InputContainer>
            <Button type="submit">Login</Button>
          </Form>
        </AdminDashBoard>
      </FlexBox>
    </Container>
  );
};

export default LogIn;