import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import { getColorByPokemonType } from '../../utils/getColorByPokemonType';
import { useMemo } from 'react';

export const PokemonItem = ({ pokemon, index, goToPokemonDetails }) => {
  return useMemo(() => {
    return (
      <TouchableWithoutFeedback onPress={() => goToPokemonDetails(pokemon.id)}>
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
  }, [pokemon, index]);
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
    justifyContent: 'flex-end',
    paddingLeft: 8,
    padding: 4,
    borderRadius: 8,
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
  goToPokemonDetails: PropTypes.func,
};
