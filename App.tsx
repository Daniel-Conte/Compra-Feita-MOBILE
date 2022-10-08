import { Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import theme from './src/config/Theme';
import Navigation from './src/navigation';

export default function App() {
  return (
    <PaperProvider theme={theme.light}>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar />
      </SafeAreaProvider>
    </PaperProvider>
  );
}
