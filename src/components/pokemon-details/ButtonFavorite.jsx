import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { usePokedex } from '../../hooks';
import { DynamicIconFavorite } from '../layout/DynamicIconFavorite';

export const ButtonFavorite = () => {
  const { favoritePokemons, focusedPokemon } = usePokedex();
  const isFavoritePokemon = favoritePokemons.some(
    (pokemon) => pokemon.id === focusedPokemon?.id
  );
  const { justLikedPokemon, justRemovedPokemonLikes } = usePokedex();
  const likePokemon = () => {
    justLikedPokemon({ ...focusedPokemon });
  };

  const removePokemonLikes = () => {
    justRemovedPokemonLikes(focusedPokemon?.id);
  };

  return (
    <TouchableWithoutFeedback
      onPress={isFavoritePokemon ? removePokemonLikes : likePokemon}
    >
      <View styles={styles.container}>
        <DynamicIconFavorite touched={isFavoritePokemon} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    padding: 4,
    marginRight: 8,
  },
});
