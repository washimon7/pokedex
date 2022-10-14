import { useEffect, useState } from 'react';
import { getPokemonService } from '../services/getPokemonService';

export const useGetPokemon = pokemonId => {
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPokemonDetails();
  }, []);

  useEffect(() => {
    return () => {
      resetState();
    };
  }, []);

  const resetState = () => {
    setPokemonDetails(null);
  };

  const getPokemonDetails = async () => {
    const pokemon = await getPokemonService(pokemonId);
    if (pokemon) {
      setPokemonDetails({
        id: pokemon.id,
        name: pokemon.name,
        type: pokemon.types[0].type.name,
        types: pokemon.types,
        order: pokemon.order,
        image: pokemon.sprites.other['official-artwork'].front_default,
        stats: pokemon.stats,
      });
      // console.log(pokemon.stats);
    }
    setIsLoading(false);
  };

  return { pokemonDetails, isLoading };
};
