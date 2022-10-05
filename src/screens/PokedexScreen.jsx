import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PokemonList } from '../components/pokedex/PokemonList';
import { useGetPokemons } from '../hooks/useGetPokemons';

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
