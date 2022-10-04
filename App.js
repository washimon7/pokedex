import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigation } from './src/navigation/TabNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
