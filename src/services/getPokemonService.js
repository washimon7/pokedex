import { API_HOST } from '../utils/constants';

export const getPokemonService = async id => {
  try {
    const url = `${API_HOST}/pokemon/${id}`;

    const response = await fetch(url);
    const decodedData = await response.json();

    return decodedData;
  } catch (error) {
    console.error(error);
  }
};
