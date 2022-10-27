import { Text, View, StyleSheet, Button } from 'react-native';
import PropTypes from 'prop-types';
import { UserDataItem } from './UserDataItem';
import { useSignOut } from '../../hooks/useSignOut';

export const UserData = ({ user }) => {
  const { doSignOut } = useSignOut();

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Bienvenido</Text>
        <Text style={styles.title}>{`${user.firstName} ${user.lastName}`}</Text>
      </View>
      <View style={styles.container}>
        <UserDataItem title="Nombre" text="Miguel Coila Enriquez" />
        <UserDataItem title="Username" text="washimon7" />
        <UserDataItem title="Email" text="washing.coen@gmail.com" />
        <UserDataItem title="Total Favoritos" text="0" />
      </View>
      <Button
        style={styles.btnSignOut}
        onPress={doSignOut}
        title="Desconectarse"
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 28,
  },
  title: {
    fontWeight: '700',
    fontSize: 22,
  },
  content: {
    marginBottom: 20,
  },
  btnSignOut: {
    marginTop: 20,
  },
});

UserData.propTypes = {
  user: PropTypes.object,
};
