import { Text, View } from 'react-native';
import { usePokedex } from '../hooks/usePokedex';

export const FavoriteScreen = () => {
  const { favoritePokemons } = usePokedex();

  return (
    <View>
      <Text>Favorite</Text>
      <Text>{favoritePokemons.length} pokemons</Text>
      {/* {favoritePokemons.map((pokemon) => (
        <Text key={pokemon.id}>
        {pokemon.order} {pokemon.name}
        </Text>
      ))} */}
    </View>
  );
};
