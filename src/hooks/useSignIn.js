import { useNavigation } from '@react-navigation/native';
import { useContext, useEffect, useState } from 'react';
import { Keyboard, ToastAndroid } from 'react-native';
import { AuthContext } from '../app/AuthContext';
import { signInService } from '../services/signInService';

export const useSignIn = () => {
  const navigation = useNavigation();
  const initialValues = { username: '', password: '' };
  const [hasSignInErrors, setHasSignInErrors] = useState(false);
  const { justSignedIn } = useContext(AuthContext);

  useEffect(() => {
    if (hasSignInErrors) {
      ToastAndroid.show(
        'El usuario o contraseña son incorrectos',
        ToastAndroid.SHORT
      );
    }
  }, [hasSignInErrors]);

  const doSignIn = async userForm => {
    Keyboard.dismiss();
    setHasSignInErrors(false);

    const response = await signInService(userForm);

    if (response) {
      console.log({ user: response });
      justSignedIn(response);
      navigation.navigate('MainTabs', { screen: 'Account', replace: true });
    } else {
      setHasSignInErrors(true);
    }
  };

  return { initialValues, doSignIn };
};
