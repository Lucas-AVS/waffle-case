import { PropsWithChildren, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from './AuthProvider';

type ProtectedRouteProps = PropsWithChildren;

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { email } = useParams<{ email: string }>();

  useEffect(() => {
    if (!user) {
      navigate('/', { replace: true });
      return;
    }

    if (user.type === 'admin') {
      navigate('/admin', { replace: true });
    } else if (user.type === 'user' && email) {
      navigate(`/user/${email}`, { replace: true });
    } else {
      navigate('/user', { replace: true });
    }
  }, [navigate, user, email]);

  return children;
}
