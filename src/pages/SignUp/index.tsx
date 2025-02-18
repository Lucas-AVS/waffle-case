import React, { useState } from 'react';
import { Container, FormWrapper, Title, Form, Label, Input, Button } from './style';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    // Your sign-up logic here
    alert("User Created!");
    window.location.href = "/";
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Create new user</Title>
        <Form onSubmit={handleSignUp}>
          <div>
            <Label htmlFor="email">Seu email:</Label>
            <Input
              type="email"
              placeholder="insira seu melhor email aqui..."
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <Label htmlFor="password">Sua senha:</Label>
            <Input
              type="password"
              placeholder="sua senha super secreta"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <Label htmlFor="confirm-password">Confirme sua senha:</Label>
            <Input
              type="password"
              placeholder="sua senha super secreta"
              required
            />
          </div>
          <Button type="submit">inscreva-se</Button>
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default SignUp;