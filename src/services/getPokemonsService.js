import { API_HOST } from '../utils/constants';

export const getPokemonsService = async () => {
  try {
    const url = `${API_HOST}/pokemon?limit=20&offset=0`;

    const response = await fetch(url);
    const decodedData = await response.json();

    return decodedData;
  } catch (error) {
    console.error(error);
  }
};
