import { useParams } from 'react-router-dom';
import useUserData from '../../services/useUserData';

const UserDashboard = () => {
  const { email } = useParams<{ email: string }>();
  const { data, loading, error } = useUserData(email || '');

  return (
    <div>
      <h1>User Dashboard</h1>
      <p>Welcome, {email}</p>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <p>Email: {data.email}</p>
          <p>Last Opened At: {data.last_opened_at}</p>
          <p>Streak: {data.streak}</p>
          <p>Last Opened Post: {data.last_opened_post}</p>
          <h3>Posts:</h3>
          <ul>
            {data.posts.map((post) => (
              <li key={post.post_id}>
                Post ID: {post.post_id} | UTM Source: {post.utm_source}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;