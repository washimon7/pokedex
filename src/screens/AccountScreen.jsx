import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../app/AuthContext';

export const AccountScreen = () => {
  const navigation = useNavigation();
  const { auth } = useContext(AuthContext);

  const goToSignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      {auth?.signedInUser ? (
        <Text>Panel del usuario</Text>
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
