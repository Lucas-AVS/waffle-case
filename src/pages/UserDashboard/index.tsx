import { useParams } from 'react-router-dom';
import useUserData from '../../services/useUserData';
import {
  DashboardContainer,
  DashboardHeader,
  DashboardTitle,
  DashboardContent,
  InfoCard,
  DashboardButton,
  DashboardFlexBox,
  MainInfoContainer,
  OtherInfoContainer,
  MainInfoCard,
  Footer,
  FooterMessage,
} from './style';


const getWeekPosts = (posts: Array<{ post_id: string; opened_at: string }>) => {
  const today = new Date();
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay());

  const weekPosts = posts.filter((post) => {
    const postDate = new Date(post.opened_at); // Converte a data do post para um objeto Date
    return postDate >= startOfWeek && postDate <= today; // Retorna true se o post foi aberto nesta semana
  });

  return weekPosts.map((post) => post.post_id);
};

const getMedalType = (streak: number) => {
  if (streak > 12) return '🏅 Medalha de ouro';
  if (streak > 6) return '🥈 Medalha de prata';
  return '🥉 Medalha de bronze';
};

const UserDashboard = () => {
  const { email } = useParams<{ email: string }>();
  const { data, loading, error } = useUserData(email || '');

  const handleRefresh = () => {
    window.location.href = '/';
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
  };

  const hoursAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / 1000 / 60 / 60);
    return `${hours} horas atrás`;

  }

  const getUserName = (email: string) => {
    return email.split('@')[0];
  };

  const getFooterMessage = (medalType: string) => {
    if (medalType === '🏅 Medalha de ouro') {
      return 'Ouro? Diamante? Quem liga? O verdadeiro tesouro é o conhecimento! 📚💎 Continue acompanhando nossa newsletter e brilhe cada vez mais!';
    }
    return 'Bronze na mão, mas conhecimento no coração! 💡🔥 Acompanhe nossa newsletter e veja sua medalha evoluir! 🥉➡️🥇';
  };

  const weekPosts = data ? getWeekPosts(data.posts) : [];
  console.log(data)

  return (
    <DashboardContainer>
      <DashboardHeader>
        <DashboardTitle>User Dashboard</DashboardTitle>
        <DashboardButton onClick={handleRefresh}>Sair</DashboardButton>
      </DashboardHeader>
      
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {data && (
        <DashboardContent>
          <DashboardFlexBox>
            <MainInfoContainer>
              <MainInfoCard>
                <h1>{getUserName(data.email)}</h1>
                <p>Email: {data.email}</p>
                <p>{getMedalType(data.streak)}</p>
              </MainInfoCard>
            </MainInfoContainer>

            <OtherInfoContainer>
              <InfoCard>
                <h2>Aberturas Seguidas</h2>
                <p>Streak: {data.streak}</p>
                <p>Última Abertura: {formatDate(data.last_opened_at)}</p>
                <p>{hoursAgo(data.last_opened_at)} </p>
              </InfoCard>

              <InfoCard>
                <h2>Post</h2>
                <p>Último Post Aberto: {data.last_opened_post}</p>
                <p>Posts Abertos Esta Semana:</p>
                <ul>
                  {weekPosts.map((postId) => (
                  <li key={postId}>Post ID: {postId}</li>
                  ))}
                </ul>    
              </InfoCard>

              <InfoCard>
                <h2>UTM Source</h2>
                <ul>
                  <li>Plataforma social mais utilizada: placeholder</li>
                  <li>Meio de comunicação mais utilizado: placeholder</li>
                </ul>
              </InfoCard>
            </OtherInfoContainer>
          </DashboardFlexBox>
        </DashboardContent>
      )}

      <Footer>
        <FooterMessage>
          {data && getFooterMessage(getMedalType(data.streak))}
        </FooterMessage>
      </Footer>
    </DashboardContainer>
  );
};

export default UserDashboard;