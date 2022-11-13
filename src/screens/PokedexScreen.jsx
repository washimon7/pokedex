import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PokemonList } from '../components';
import { useGetPokemons } from '../hooks';

export const PokedexScreen = () => {
  const { pokemons, hasPokemons, loadPokemons } = useGetPokemons();

  return (
    <SafeAreaView>
      <PokemonList
        pokemons={pokemons}
        hasPokemons={hasPokemons}
        loadMorePokemons={loadPokemons}
      />
      <StatusBar />
    </SafeAreaView>
  );
};
