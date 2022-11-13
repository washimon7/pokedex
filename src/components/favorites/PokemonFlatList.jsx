import { FlatList, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import { PokemonItem } from '../pokedex/PokemonItem';

export const PokemonFlatList = ({ pokemons }) => {
  const navigation = useNavigation();

  const goToPokemonDetails = (id) => {
    navigation.navigate('PokemonDetails', {
      pokemonId: id,
    });
  };

  const renderItem = (pokemon) => (
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
      keyExtractor={(pokemon) => String(pokemon.id)}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      showsVerticalScrollIndicator={false}
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

PokemonFlatList.propTypes = {
  pokemons: PropTypes.array,
};
