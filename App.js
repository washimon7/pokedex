import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthProvider from './src/app/AuthContext';
import { RootNavigation } from './src/navigation/RootNavigation';

export default function App() {
  return (
    <AuthProvider>
      <SafeAreaProvider>
        <RootNavigation />
      </SafeAreaProvider>
    </AuthProvider>
  );
}
