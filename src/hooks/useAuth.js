import { useContext } from 'react';
import { AuthContext } from '../app/AuthContext';

export const useAuth = () => {
  const { auth, justSignedIn, justSignedOut } = useContext(AuthContext);

  return { auth, justSignedIn, justSignedOut };
};
