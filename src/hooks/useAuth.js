import { useContext } from 'react';
import { AuthContext } from '../app/AuthContext';

export const useAuth = () => {
  const { auth, justSignedIn } = useContext(AuthContext);

  return { auth, justSignedIn };
};
