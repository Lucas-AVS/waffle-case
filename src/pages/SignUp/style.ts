import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const FormWrapper = styled.div`
  background-color: ${(props) => props.theme['cinza-500']};
  border-bottom: 4px solid ${(props) => props.theme['amarelo']};
  border-radius: 0.5rem;
  padding: 1.5rem;
  padding-top: 18px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
  position: relative;
  grid-column: span 12 / span 12;
  @media (min-width: 1024px) {
    grid-column: span 7 / span 7;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme['attr-bg']};
    bottom: 0;
    left: 0;
  }
`;

export const Title = styled.h1`
color: ${(props) => props.theme['amarelo']};
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid ${(props) => props.theme['cinza-600']};
  border-radius: 0.25rem;
  margin-bottom: 1.25rem;
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme['amarelo']};
  }
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme['amarelo']};
  font-weight: bold;
  color: ${(props) => props.theme['preto']};
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme['amarelo-claro']}; 
  }
`;