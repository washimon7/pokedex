import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, View } from 'react-native';
import { UserData } from '../components';
import { useAuth } from '../hooks';

export const AccountScreen = () => {
  const navigation = useNavigation();
  const { auth } = useAuth();

  const goToSignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      {auth?.signedInUser ? (
        <UserData user={auth.signedInUser} />
      ) : (
        <View style={styles.btnSignIn}>
          <Button onPress={goToSignIn} title="Iniciar sesión" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  btnSignIn: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
