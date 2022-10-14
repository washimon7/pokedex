import { Formik } from 'formik';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useSignIn } from '../../hooks/useSignIn';
import { validateForm } from '../../utils/validateForm';

export const SignInScreen = () => {
  const { initialValues, doSignIn } = useSignIn();

  return (
    <Formik
      onSubmit={doSignIn}
      initialValues={initialValues}
      validate={validateForm}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        touched,
        values,
        errors,
      }) => (
        <View style={styles.container}>
          <Text style={styles.title}>Inicia Sesión</Text>
          <TextInput
            onChangeText={handleChange('username')}
            onBlur={handleBlur('username')}
            style={styles.input}
            value={values.username}
            placeholder="Nombre de usuario"
            autoCapitalize="none"
          />
          {errors?.username && touched?.username && (
            <Text style={styles.errorText}>{errors.username}</Text>
          )}
          <TextInput
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            style={styles.input}
            value={values.password}
            placeholder="Contraseña"
            autoCapitalize="none"
            secureTextEntry={true}
          />
          {errors?.password && touched?.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )}
          <View style={styles.btnSubmit}>
            <Button onPress={handleSubmit} title="Iniciar sesión" />
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '700',
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
    marginTop: 16,
  },
  btnSubmit: {
    marginTop: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 13,
    marginVertical: 8,
    marginLeft: 4,
    letterSpacing: 1,
  },
});
