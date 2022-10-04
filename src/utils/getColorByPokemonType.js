import { POKEMON_TYPE_COLORS } from './constants';

export const getColorByPokemonType = type => {
  return POKEMON_TYPE_COLORS[type];
};
