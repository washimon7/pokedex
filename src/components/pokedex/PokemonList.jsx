import { FlatList, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { PokemonItem } from './PokemonItem';

export const PokemonList = ({ pokemons }) => {
  const renderItem = pokemon => (
    <PokemonItem
      key={pokemon.id}
      pokemon={pokemon.item}
      index={pokemon.index}
    />
  );

  return (
    <FlatList
      contentContainerStyle={styles.contentContainer}
      data={pokemons}
      renderItem={renderItem}
      numColumns={2}
      keyExtractor={pokemon => String(pokemon.id)}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  separator: {
    height: 16,
  },
});

PokemonList.propTypes = {
  pokemons: PropTypes.array,
};
