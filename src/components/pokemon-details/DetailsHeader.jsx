import { Image, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { getColorByPokemonType } from '../../utils/getColorByPokemonType';

export const DetailsHeader = ({ name, order, image, type }) => {
  const bg = getColorByPokemonType(type);

  return (
    <View style={[styles.bg, { backgroundColor: bg }]}>
      <Image style={styles.pokemonImage} source={{ uri: image }} />
      <Text style={styles.pokemonName}>{name}</Text>
      <Text style={styles.pokemonOrder}>#{`${order}`.padStart(3, 0)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 320,
    borderBottomLeftRadius: 250,
    borderBottomRightRadius: 250,
    position: 'relative',
  },
  pokemonName: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 27,
    textTransform: 'capitalize',
    position: 'absolute',
    top: 44,
    left: 32,
  },
  pokemonOrder: {
    color: '#fff',
    fontWeight: '500',
    position: 'absolute',
    top: 52,
    right: 32,
    letterSpacing: 2,
  },
  pokemonImage: {
    width: 250,
    height: 250,
    bottom: -36,
  },
});

DetailsHeader.propTypes = {
  name: PropTypes.string,
  order: PropTypes.number,
  image: PropTypes.string,
  type: PropTypes.string,
};
