import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthProvider from './src/app/AuthContext';
import PokedexProvider from './src/app/PokedexContext';
import { RootNavigation } from './src/navigation/RootNavigation';

export default function App() {
  return (
    <AuthProvider>
      <PokedexProvider>
      <SafeAreaProvider>
        <RootNavigation />
      </SafeAreaProvider>
      </PokedexProvider>
    </AuthProvider>
  );
}
