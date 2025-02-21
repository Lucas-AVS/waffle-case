import { createContext, PropsWithChildren, useContext, useState } from 'react';

type User = {
  type: 'admin' | 'user';
};

const AuthContext = createContext<User | null>(null);

type AuthProviderProps = PropsWithChildren & {
  isSignedIn?: boolean;
  isAdmin?: boolean;
};

export default function AuthProvider({
  children,
  isSignedIn,
  isAdmin,
}: AuthProviderProps) {
  // Uses `isSignedIn` prop to determine whether or not to render a user
  const [user] = useState<User | null>(() => {
    if (isSignedIn && isAdmin) {
      return { type: 'admin' };
    } else if (isSignedIn && !isAdmin) {
      return { type: 'user' };
    } else {
      return null;
    }
  });

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};