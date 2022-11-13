export const pokedexReducer = (state, action) => {
  switch (action.type) {
    case 'focused-pokemon':
      return {
        ...state,
        focusedPokemon: { ...action.payload },
      };
    case 'unfocused-pokemon':
      return {
        ...state,
        focusedPokemon: null,
      };
    case 'liked-pokemon':
      return {
        ...state,
        favoritePokemons: [...state.favoritePokemons, action.payload],
      };
    case 'removed-pokemon-likes':
      return {
        ...state,
        favoritePokemons: state.favoritePokemons.filter(
          (item) => item.id !== action.payload
        ),
      };
    case 'cleaned-favorite-pokemons':
      return {
        ...state,
        favoritePokemons: [],
      };
    default:
      return state;
  }
};
