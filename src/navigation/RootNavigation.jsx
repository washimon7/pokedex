import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PokemonDetailsScreen } from '../screens';
import { TabNavigation } from './TabNavigation';

const Stack = createStackNavigator();

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainTabs"
          component={TabNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PokemonDetails"
          component={PokemonDetailsScreen}
          options={{ headerTransparent: true, headerTitle: '' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
