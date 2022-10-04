export const getPokemonByUrlService = async url => {
  try {
    const response = await fetch(url);
    const decodedData = await response.json();

    return decodedData;
  } catch (error) {
    console.error(error);
  }
};
