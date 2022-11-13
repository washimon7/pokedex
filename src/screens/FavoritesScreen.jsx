import { StyleSheet, Text, View } from 'react-native';
import { NoSignedUser, PokemonFlatList } from '../components';
import { useAuth, usePokedex } from '../hooks';

export const FavoritesScreen = () => {
  const { favoritePokemons } = usePokedex();
  const { auth } = useAuth();

  if (!auth?.signedInUser) {
    return (
      <View style={styles.wrapper}>
        <NoSignedUser />
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      {favoritePokemons.length === 0 ? (
        <Text style={styles.noPokemonsText}>
          Todavía no tienes Pokemons favoritos
        </Text>
      ) : (
        <PokemonFlatList pokemons={favoritePokemons} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  noPokemonsText: {
    marginHorizontal: 16,
    marginTop: 16,
  },
});
