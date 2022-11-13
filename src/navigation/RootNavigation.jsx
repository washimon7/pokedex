import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PokemonDetailsScreen, SignInScreen } from '../screens';
import { TabNavigation } from './TabNavigation';
import { ButtonFavorite } from '../components/pokemon-details/ButtonFavorite';
import { useAuth } from '../hooks/useAuth';

const Stack = createStackNavigator();

export const RootNavigation = () => {
  const { auth } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainTabs"
          component={TabNavigation}
          options={{ headerShown: false, headerTitle: '' }}
        />
        <Stack.Screen
          name="PokemonDetails"
          component={PokemonDetailsScreen}
          options={{
            headerTransparent: true,
            headerTitle: '',
            headerRight: ({}) => auth?.signedInUser && <ButtonFavorite />,
            headerRightContainerStyle: {
              paddingRight: 12,
            },
          }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{ title: 'Mi Cuenta' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
