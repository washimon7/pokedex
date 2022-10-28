import { StyleSheet, View } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { usePokedex } from '../../hooks/usePokedex';
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
    <TouchableNativeFeedback
      onPress={isFavoritePokemon ? removePokemonLikes : likePokemon}
    >
      <View styles={styles.container}>
        <DynamicIconFavorite touched={isFavoritePokemon} />
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    padding: 4,
    backgroundColor: 'black',
    marginRight: 8,
  },
});
