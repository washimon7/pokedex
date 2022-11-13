import { useAuth } from './useAuth';
import { usePokedex } from './usePokedex';

export const useSignOut = () => {
  const { justSignedOut } = useAuth();
  const { justCleanedFavoritePokemons } = usePokedex();

  const doSignOut = () => {
    justCleanedFavoritePokemons();
    justSignedOut();
  };

  return { doSignOut };
};
