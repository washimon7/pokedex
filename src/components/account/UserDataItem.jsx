import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

export const UserDataItem = ({ title, text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}:</Text>
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#cfcfcf',
  },
  title: {
    fontWeight: '700',
    paddingRight: 8,
    flexBasis: 120,
  },
});

UserDataItem.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};
