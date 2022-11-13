import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Keyboard, ToastAndroid } from 'react-native';
import { signInService } from '../services/signInService';
import { useAuth } from '../hooks/useAuth';

export const useSignIn = () => {
  const navigation = useNavigation();
  const initialValues = { username: '', password: '' };
  const [hasSignInErrors, setHasSignInErrors] = useState(false);
  const { justSignedIn } = useAuth();

  useEffect(() => {
    if (hasSignInErrors) {
      ToastAndroid.show(
        'El usuario o contraseña son incorrectos',
        ToastAndroid.SHORT
      );
    }
  }, [hasSignInErrors]);

  const doSignIn = async (userForm) => {
    Keyboard.dismiss();
    setHasSignInErrors(false);

    const response = await signInService(userForm);

    if (response) {
      // console.log({ user: response });
      justSignedIn(response);
      navigation.navigate('MainTabs', { screen: 'Account', replace: true });
    } else {
      setHasSignInErrors(true);
    }
  };

  return { initialValues, doSignIn };
};
