import { useEffect, useState } from 'react';
import { getPokemonService } from '../services/getPokemonService';
import { usePokedex } from './usePokedex';

export const useGetPokemon = (pokemonId) => {
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { justFocusedPokemon, justUnfocusedPokemon } = usePokedex();

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
    justUnfocusedPokemon();
  };

  const getPokemonDetails = async () => {
    const pokemon = await getPokemonService(pokemonId);
    if (pokemon) {
      const pokemonObj = {
        id: pokemon.id,
        name: pokemon.name,
        type: pokemon.types[0].type.name,
        types: pokemon.types,
        order: pokemon.order,
        image: pokemon.sprites.other['official-artwork'].front_default,
        stats: pokemon.stats,
      };
      setPokemonDetails({ ...pokemonObj });
      justFocusedPokemon({ ...pokemonObj });
      // console.log(pokemon.stats);
    }
    setIsLoading(false);
  };

  return { pokemonDetails, isLoading };
};
