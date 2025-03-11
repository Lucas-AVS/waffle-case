import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import AuthProvider from './context/AuthProvider';
import { waffleColors } from './styles/themes/waffle-colors';
import { GlobalStyle } from './styles/global';
import ProtectedRoute from './context/ProtectedRouteProps';
import LogIn from './pages/LogIn';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';

const NotFound = () => {
  return <h1>404 - Not Found</h1>;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <LogIn />,
  },
  {
    path: '/admin',
    element: (
      <ProtectedRoute>
        <AdminDashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: '/user/:email',
    element: (
      <ProtectedRoute>
        <UserDashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={waffleColors}>
        <RouterProvider router={router} />
        <GlobalStyle />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;