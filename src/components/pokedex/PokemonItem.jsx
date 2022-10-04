import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import { getColorByPokemonType } from '../../utils/getColorByPokemonType';

export const PokemonItem = ({ pokemon, index }) => {
  const goToPokemonDetails = () => {
    console.log('Going..');
  };

  return (
    <TouchableWithoutFeedback onPress={goToPokemonDetails}>
      <View
        style={[
          styles.card,
          index % 2 === 0 ? { marginRight: 8 } : { marginLeft: 8 },
          { backgroundColor: getColorByPokemonType(pokemon.type) },
        ]}
      >
        <Text style={styles.pokemon}>{pokemon.name}</Text>
        <Image style={styles.image} source={{ uri: pokemon.image }} />
        <Text style={styles.order}>#{`${pokemon.order}`.padStart(3, 0)}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
    justifyContent: 'flex-end',
    paddingLeft: 8,
    padding: 4,
  },
  image: {
    position: 'absolute',
    width: 90,
    height: 90,
    bottom: 2,
    right: 2,
  },
  order: {
    position: 'absolute',
    right: 10,
    top: 10,
    color: '#fff',
    fontSize: 12,
    letterSpacing: 1,
  },
  pokemon: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
    textTransform: 'capitalize',
  },
});

PokemonItem.propTypes = {
  pokemon: PropTypes.object,
  index: PropTypes.number,
};
