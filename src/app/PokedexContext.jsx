import { createContext, useReducer } from 'react';
import { pokedexReducer } from './pokedexReducer';

export const PokedexContext = createContext();

const initialValues = {
  favoritePokemons: [],
  focusedPokemon: null,
};

const PokedexProvider = ({ children }) => {
  const [pokedexState, dispatch] = useReducer(pokedexReducer, initialValues);

  const justFocusedPokemon = (pokemon) => {
    dispatch({
      type: 'focused-pokemon',
      payload: pokemon,
    });
  };

  const justUnfocusedPokemon = () => {
    dispatch({
      type: 'unfocused-pokemon',
    });
  };

  const justLikedPokemon = (pokemon) => {
    dispatch({
      type: 'liked-pokemon',
      payload: pokemon,
    });
  };

  const justRemovedPokemonLikes = (pokemonId) => {
    dispatch({
      type: 'removed-pokemon-likes',
      payload: pokemonId,
    });
  };

  return (
    <PokedexContext.Provider
      value={{
        favoritePokemons: pokedexState.favoritePokemons,
        focusedPokemon: pokedexState.focusedPokemon,
        justFocusedPokemon,
        justUnfocusedPokemon,
        justLikedPokemon,
        justRemovedPokemonLikes,
      }}
    >
      {children}
    </PokedexContext.Provider>
  );
};

export default PokedexProvider;
