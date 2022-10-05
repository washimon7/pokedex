import { useEffect, useState } from 'react';
import { getPokemonByUrlService } from '../services/getPokemonByUrlService';
import { getPokemonsService } from '../services/getPokemonsService';

export const useGetPokemons = () => {
  const [nextUrl, setNextUrl] = useState('');
  const [pokemons, setPokemons] = useState([]);
  const [hasPokemons, setHasPokemons] = useState(true);

  useEffect(() => {
    loadPokemons();
  }, []);

  const loadPokemons = async () => {
    const response = await getPokemonsService(nextUrl);
    if (response?.next) {
      setNextUrl(response.next);
    } else {
      setNextUrl('');
      setHasPokemons(false);
    }

    if (response?.results) {
      const pokemonServices = response.results.map(result =>
        getPokemonByUrlService(result.url)
      );
      Promise.all(pokemonServices).then(pokemonObjs => {
        console.log(`Got ${pokemonObjs.length} pokemons..`);
        setPokemons([
          ...pokemons,
          ...pokemonObjs.map(pokemonObj => ({
            id: pokemonObj.id,
            name: pokemonObj.name,
            type: pokemonObj.types[0].type.name,
            order: pokemonObj.order,
            image: pokemonObj.sprites.other['official-artwork'].front_default,
          })),
        ]);
      });
    }
  };

  return { pokemons, hasPokemons, loadPokemons };
};
