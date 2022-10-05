import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { getColorByPokemonType } from '../../utils/getColorByPokemonType';

export const DetailsTypes = ({ types }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Tipos</Text>
      <View style={styles.content}>
        {types.map(type => (
          <Text
            style={[
              styles.typeName,
              { backgroundColor: getColorByPokemonType(type.type.name) },
            ]}
            key={type.slot}
          >
            {type.type.name}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  content: {
    flexDirection: 'row',
  },
  subtitle: {
    fontWeight: '700',
    marginBottom: 8,
  },
  typeName: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginRight: 8,
    color: '#fff',
    textTransform: 'capitalize',
  },
});

DetailsTypes.propTypes = {
  types: PropTypes.array,
};
