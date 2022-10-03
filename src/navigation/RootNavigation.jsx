import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PokemonDetailsScreen } from '../screens';
import { TabNavigation } from './TabNavigation';

const Stack = createStackNavigator();

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainTabs" component={TabNavigation} />
        <Stack.Screen name="Pokemon" component={PokemonDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
