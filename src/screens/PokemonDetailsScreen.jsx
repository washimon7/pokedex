import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PropTypes from 'prop-types';
import { useGetPokemon } from '../hooks';
import {
  Spinner,
  DetailsHeader,
  DetailsTypes,
  DetailsStats,
} from '../components';

export const PokemonDetailsScreen = ({ route }) => {
  const { pokemonId } = route.params;
  const { pokemonDetails, isLoading } = useGetPokemon(pokemonId);

  if (isLoading) {
    return (
      <SafeAreaView>
        <Spinner />
      </SafeAreaView>
    );
  }

  if (!pokemonDetails) {
    return (
      <SafeAreaView>
        <Text>No hay conexión</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <DetailsHeader
        name={pokemonDetails?.name}
        order={pokemonDetails?.order}
        image={pokemonDetails?.image}
        type={pokemonDetails?.type}
      />
      <DetailsTypes types={pokemonDetails?.types || []} />
      <DetailsStats stats={pokemonDetails?.stats || []} />
    </SafeAreaView>
  );
};

PokemonDetailsScreen.propTypes = {
  route: PropTypes.object,
};
