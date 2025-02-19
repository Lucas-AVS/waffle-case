import { DashboardButton, DashboardContainer, DashboardContent, DashboardHeader, DashboardTitle, InfoCard } from "./style";

function AdminDashboard() {
    return (
      <DashboardContainer>
        <DashboardHeader>
          <DashboardTitle>Dashboard Administrativo</DashboardTitle>
          <DashboardButton>Sair</DashboardButton>
        </DashboardHeader>
  
        <DashboardContent>
          <InfoCard>Total de E-mails Enviados: 2500</InfoCard>
          <InfoCard>E-mails Abertos: 1234</InfoCard>
          <InfoCard>Usuário com maior streak: joao@email.com</InfoCard>
          <InfoCard>Post Mais Aberto: post_123456</InfoCard>
        </DashboardContent>
      </DashboardContainer>
    );
  }

  export default AdminDashboard;