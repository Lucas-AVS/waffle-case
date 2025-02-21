import { PropsWithChildren, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from './AuthProvider';

type ProtectedRouteProps = PropsWithChildren;

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const user = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate('/', { replace: true });
    } else if (user.type === 'admin') {
      navigate('/admin', { replace: true });
    } else if (user.type === 'user') {
      navigate('/user', { replace: true });
    }
  }, [navigate, user?.type]);

  return children;
}