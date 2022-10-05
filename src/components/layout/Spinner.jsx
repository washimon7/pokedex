import { ActivityIndicator, StyleSheet } from 'react-native';

export const Spinner = () => {
  return (
    <ActivityIndicator style={styles.spinner} color="#aeaeae" size="large" />
  );
};

const styles = StyleSheet.create({
  spinner: {
    marginTop: 16,
    marginBottom: 60,
  },
});
