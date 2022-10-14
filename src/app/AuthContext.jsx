import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { authReducer } from './authReducer';

export const AuthContext = createContext();

const initialValues = {
  signedInUser: null,
};

const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialValues);

  const justSignedIn = userDetails => {
    dispatch({
      type: 'signed-in',
      payload: userDetails,
    });
  };

  const justSignedOut = () => {
    dispatch({
      type: 'signed-out',
    });
  };

  return (
    <AuthContext.Provider
      value={{
        auth: authState,
        justSignedIn,
        justSignedOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.object,
};

export default AuthProvider;
