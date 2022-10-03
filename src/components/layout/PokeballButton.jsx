import { Image } from 'react-native';

export const PokeballButton = () => {
  return (
    <Image
      style={{ width: 75, height: 75, top: -15 }}
      source={require('../../assets/icons/pokeball.png')}
    />
  );
};
