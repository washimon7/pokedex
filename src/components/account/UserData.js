import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export const UserData = ({ user }) => {
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Bienvenido</Text>
        <Text style={styles.title}>{`${user.firstName} ${user.lastName}`}</Text>
      </View>
      <View>
        <Text>Contenido</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    marginBottom: 28,
  },
  title: {
    fontWeight: '700',
    fontSize: 22,
  },
  content: {
    marginBottom: 20,
  },
});

UserData.propTypes = {
  user: PropTypes.object,
};
