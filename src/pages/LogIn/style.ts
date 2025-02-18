import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px 70px 24px 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme['cinza-100']};

  @media (max-width: 560px) {
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.25rem;
    }
    body, input, textarea, button {
      font-size: 1rem;
    }
    padding: 10px 5px;
  }

  @media (min-width: 1200px) {
    height: 77vh;
    margin-bottom: 23vh;
    border-bottom: 1px solid ${(props) => props.theme['cinza-600']};
    padding: 10px 25px;
  }
`;

export const TimeInfo = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  :first-child {
    color: ${(props) => props.theme['amarelo']};
  }
`;



export const Icon = styled.img`
  margin-bottom: 2rem;
  width: 14rem;
  height: auto;
`;

export const FlexBox = styled.div`
  padding-top: 10px;
  min-width: 40%;
  max-width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  @media (min-width: 1025px) {
    flex-direction: row;
    gap: 120px;
  }
`;

export const LoginDiv = styled.div`
  padding: 24px 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

export const AdminDashBoard = styled.div`
  background-color: ${(props) => props.theme['cinza-500']};
  border: 1px solid ${(props) => props.theme['cinza-600']};
  border-radius: 6px;
  margin: 0 auto;
  padding: 1rem;
  min-width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;


  @media (min-width: 1025px) {
    min-width: 30%;
    max-width: 30%;
    padding: 2rem;
  }
`;

export const Title = styled.h1`
  font-size: 3.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  width: 100%;
  text-align: flex-start;
  @media (min-width: 1025px) {
    text-align: flex-start;
  }
`;

export const Paragraph = styled.p`
  margin-bottom: 1rem;
  text-align: center;
`;

export const Link = styled.a`
  color: ${(props) => props.theme['amarelo']};
  cursor: pointer;
  text-decoration: underline;
  margin-bottom: 1rem;
  text-align: center;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  @media (min-width: 1025px) {
    width: 70%;
  }
`;

export const AdminForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const InputIcon = styled.div`
  position: absolute;
  font-size: 1.4rem;
  font-weight: bold;
  top: 54%;
  left: 10px;
  transform: translateY(-50%);
  pointer-events: none;
`;

export const Input = styled.input`
height: 3.5rem;
  width: 100%;
  padding: 1rem 1rem 0.5rem 2.5rem; /* Espaço para o ícone */
  border: 1px solid ${(props) => props.theme['cinza-600']}; 
  border-radius: 0.25rem;
  &:focus {
    outline: none;
    border-bottom: 2px solid ${(props) => props.theme['amarelo']};
  }
  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: 0.5rem;
    left: 2.5rem;
    font-size: 0.75rem;
  }
`;

export const InputNoIcon = styled.input`
  width: 100%;
  padding: 1rem 1rem 0.5rem 1rem; 
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
  &:focus {
    outline: none;
    border-bottom: 2px solid ${(props) => props.theme['amarelo']};
  }
  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: 0.5rem;
    font-size: 0.75rem;
  }
`;

export const FloatingLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 2.5rem;
  transform: translateY(-50%);
  pointer-events: none;
  transition: all 0.2s ease;
  color: #9ca3af;
  font-size: 1rem;
`;

export const FloatingLabelNoIcon = styled(FloatingLabel)`
  left: 1rem;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme['amarelo']};
  color: ${(props) => props.theme['preto']};
  font-weight: bold;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme['amarelo-claro']}; 
  }
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 1rem;

  :first-child {
    color: ${(props) => props.theme['amarelo']};
    font-size: 2.5rem;
  }

  @media (min-width: 1025px) {
    flex-direction: column;
  }
  
`;