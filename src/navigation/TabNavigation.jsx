import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MatIcon from '@expo/vector-icons/MaterialCommunityIcons';
import { AccountScreen, FavoritesScreen, PokedexScreen } from '../screens';
import { PokeballButton } from '../components';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Pokedex"
      screenOptions={{ tabBarLabelStyle: { fontSize: 12, paddingBottom: 4 } }}
    >
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <MatIcon name="cards-heart" color={color} size={size} />
            ) : (
              <MatIcon name="cards-heart-outline" color={color} size={size} />
            ),
          headerTitle: 'Favoritos',
        }}
      />
      <Tab.Screen
        name="Pokedex"
        component={PokedexScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <PokeballButton />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: 'Mi Cuenta',
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <MatIcon name="account" color={color} size={size} />
            ) : (
              <MatIcon name="account-outline" color={color} size={size} />
            ),
          title: 'Mi cuenta',
        }}
      />
    </Tab.Navigator>
  );
};
