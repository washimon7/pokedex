import { useContext } from 'react';
import { PokedexContext } from '../app/PokedexContext';

export const usePokedex = () => {
  const {
    favoritePokemons,
    focusedPokemon,
    justFocusedPokemon,
    justUnfocusedPokemon,
    justLikedPokemon,
    justRemovedPokemonLikes,
  } = useContext(PokedexContext);

  return {
    favoritePokemons,
    focusedPokemon,
    justFocusedPokemon,
    justUnfocusedPokemon,
    justLikedPokemon,
    justRemovedPokemonLikes,
  };
};
