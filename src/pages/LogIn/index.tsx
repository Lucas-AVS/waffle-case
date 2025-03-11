import { useState } from 'react';
import { supabase } from '../../services/supabaseClient';
import { Container, Icon, FlexBox, LoginDiv, AdminDashBoard, Title, Paragraph, Link, InputContainer, InputIcon, Input, InputNoIcon, FloatingLabel, FloatingLabelNoIcon, Button, FlexRow, TimeInfo, LoginForm, AdminForm } from './style';
import { CiMail as MailIcon } from "react-icons/ci";
import { MdOutlineLockOpen as LockIcon } from "react-icons/md";
import { FaRegClock as ClockIcon } from "react-icons/fa6";
import { useAuth } from '../../context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  
  const handleUserLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // Verifica se o usuário existe
    const { data, error } = await supabase
      .from('users')
      .select('email')
      .eq('email', loginEmail)
      .single();

    if (error || !data) {
      alert("Usuário não encontrado");
      setLoginEmail("");
      return;
    }

    // Se o usuário existir, busca os dados do usuário
    const { error: userError } = await supabase
      .rpc('get_user_data', { p_user_email: loginEmail });

    if (userError) {
      alert(userError.message);
      setLoginEmail("");
    } else {
      alert("Login success");
      setUser({ type: 'user' });
      navigate(`/user/${loginEmail}`, { replace: true });
    }
  };

  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
  
    if (error) {
      alert(error.message);
      setEmail("");
      setPassword("");
    } else {
      alert("Login success");
      setUser({ type: 'admin' });
      navigate('/admin', { replace: true });
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState('');

  return (
    <Container>
      <Icon src="/src/assets/the-news-logo.webp" alt="The News" />
      <FlexBox>
        <LoginDiv>
          <TimeInfo> <ClockIcon />sempre às 06:06 manhã</TimeInfo>
          <Title>acompanhe suas estatísticas e streak do The News!</Title>
          <Paragraph>digite seu email cadastrado:</Paragraph>
          <LoginForm onSubmit={handleUserLogin}>
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
          <Link href="https://thenews.waffle.com.br/#inscreva-se" target="_blank">não é cadastrado?</Link>
        </LoginDiv>
        <AdminDashBoard>
          <FlexRow>
            <LockIcon />
            <h2>Dashboard Administrativo</h2>
          </FlexRow>
          <AdminForm onSubmit={handleAdminLogin}>
            <InputContainer>
              <InputNoIcon
                type="text"
                placeholder=" "
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <FloatingLabelNoIcon>Nome de usuário</FloatingLabelNoIcon>
            </InputContainer>
            <InputContainer>
              <InputNoIcon
                type="password"
                placeholder=" "
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
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