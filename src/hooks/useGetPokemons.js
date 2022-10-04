import { useEffect, useState } from 'react';
import { getPokemonByUrlService } from '../services/getPokemonByUrlService';
import { getPokemonsService } from '../services/getPokemonsService';

export const useGetPokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    loadPokemons();
  }, []);

  const loadPokemons = async () => {
    const response = await getPokemonsService();
    if (response?.results) {
      const pokemonServices = response.results.map(result =>
        getPokemonByUrlService(result.url)
      );

      Promise.all(pokemonServices).then(pokemonObjs => {
        setPokemons(
          ...pokemons,
          pokemonObjs.map(pokemonObj => ({
            id: pokemonObj.id,
            name: pokemonObj.name,
            type: pokemonObj.types[0].type.name,
            order: pokemonObj.order,
            image: pokemonObj.sprites.other['official-artwork'].front_default,
          }))
        );
      });
    }
  };

  return { pokemons };
};
