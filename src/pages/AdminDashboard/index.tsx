import useAdminData from "../../services/useAdminData";
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
} from './style';

const AdminDashboard = () => {
  const { data, loading, error } = useAdminData();

  const handleRefresh = () => {
    window.location.href = '/';
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
  };

  return (
    <DashboardContainer>
      <DashboardHeader>
        <DashboardTitle>Admin Dashboard</DashboardTitle>
        <DashboardButton onClick={handleRefresh}>Sair</DashboardButton>
      </DashboardHeader>
      
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {data && (
        <DashboardContent>
          <DashboardFlexBox>
            <MainInfoContainer>
              <MainInfoCard>
                <h1>Top 3 Usuários</h1>
                <ul>
                  {data.top_users.map((user, index) => (
                    <li key={index}>
                      Email: {user.email} - Streak: {user.streak}
                    </li>
                  ))}
                </ul>
              </MainInfoCard>
            </MainInfoContainer>

            <OtherInfoContainer>
              <InfoCard>
                <h2>Top 3 Posts</h2>
                <ul>
                  {data.top_posts.map((post, index) => (
                    <li key={index}>
                      Post ID: {post.post_id} - Acessos: {post.count}
                    </li>
                  ))}
                </ul>
              </InfoCard>

              <InfoCard>
                <h2>Último webhook</h2>
                <p>
                  Post ID: {data.last_opened_post?.post_id} - Aberto em: {data.last_opened_post ? formatDate(data.last_opened_post.opened_at) : 'N/A'}
                </p>
              </InfoCard>

              <InfoCard>
                <h2>Dados de UTM</h2>
                <h3>UTM Sources</h3>
                <ul>
                  {data.utm_data.utm_sources.map((utm, index) => (
                    <li key={index}>
                      UTM Source: {utm.utm_source} - Ocorrências: {utm.count}
                    </li>
                  ))}
                </ul>
                <h3>UTM Mediums</h3>
                <ul>
                  {data.utm_data.utm_mediums.map((utm, index) => (
                    <li key={index}>
                      UTM Medium: {utm.utm_medium} - Ocorrências: {utm.count}
                    </li>
                  ))}
                </ul>
                <h3>UTM Campaigns</h3>
                <ul>
                  {data.utm_data.utm_campaigns.map((utm, index) => (
                    <li key={index}>
                      UTM Campaign: {utm.utm_campaign} - Ocorrências: {utm.count}
                    </li>
                  ))}
                </ul>
                <h3>UTM Channels</h3>
                <ul>
                  {data.utm_data.utm_channels.map((utm, index) => (
                    <li key={index}>
                      UTM Channel: {utm.utm_channel} - Ocorrências: {utm.count}
                    </li>
                  ))}
                </ul>
              </InfoCard>
            </OtherInfoContainer>
          </DashboardFlexBox>
        </DashboardContent>
      )}
    </DashboardContainer>
  );
};

export default AdminDashboard;
