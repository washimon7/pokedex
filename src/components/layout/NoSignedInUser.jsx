import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, Text, View } from 'react-native';

export const NoSignedUser = () => {
  const navigation = useNavigation();

  const goToSignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <View style={styles.message}>
        <Text style={styles.text}>
          Para ver esta pantalla tienes que iniciar sesión
        </Text>
        <Button onPress={goToSignIn} title="Ir a login" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  message: {
    marginTop: 64,
    width: 250,
  },
  text: {
    textAlign: 'center',
    marginBottom: 16,
  },
  button: {},
});
