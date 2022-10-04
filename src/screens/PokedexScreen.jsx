import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PokemonList } from '../components/pokedex/PokemonList';
import { useGetPokemons } from '../hooks/useGetPokemons';

export const PokedexScreen = () => {
  const { pokemons } = useGetPokemons();

  return (
    <SafeAreaView>
      <PokemonList pokemons={pokemons} />
      <StatusBar />
    </SafeAreaView>
  );
};
