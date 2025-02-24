import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  background-color: ${(props) => props.theme['cinza-300']};
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
  }
`;

export const DashboardHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  margin-bottom: 4rem;
  background-color: ${(props) => props.theme['branco']};
  border-bottom: 4px solid ${(props) => props.theme['amarelo']};

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1 0.7rem;
    gap: 1rem;
  }
`;

export const DashboardTitle = styled.h1`
  color: ${(props) => props.theme['amarelo']};
  font-size: 1.8rem;
  font-weight: bold;
`;

export const DashboardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const InfoCard = styled.div`
  background-color: ${(props) => props.theme['branco']};
  width: fit-content;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border-left: 4px solid ${(props) => props.theme['amarelo']};
  color: ${(props) => props.theme['cinza-900']};
  font-size: 1.2rem;
`;

export const DashboardButton = styled.button`
  padding: 0.5rem 1.5rem;
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