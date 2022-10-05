import { FlatList, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import { PokemonItem } from './PokemonItem';
import { Spinner } from '../layout/Spinner';

export const PokemonList = ({ pokemons, loadMorePokemons, hasPokemons }) => {
  const navigation = useNavigation();

  const goToPokemonDetails = id => {
    navigation.navigate('PokemonDetails', {
      pokemonId: id,
    });
  };

  const renderItem = pokemon => (
    <PokemonItem
      key={pokemon.id}
      pokemon={pokemon.item}
      index={pokemon.index}
      goToPokemonDetails={goToPokemonDetails}
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
      showsVerticalScrollIndicator={false}
      onEndReached={hasPokemons ? loadMorePokemons : null}
      onEndReachedThreshold={0.1}
      ListFooterComponent={hasPokemons && <Spinner />}
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
  spinner: {
    marginTop: 16,
    marginBottom: 60,
  },
});

PokemonList.propTypes = {
  pokemons: PropTypes.array,
  hasPokemons: PropTypes.bool,
  loadMorePokemons: PropTypes.func,
};
