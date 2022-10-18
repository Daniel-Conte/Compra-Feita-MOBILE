import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';

import theme from './src/config/Theme';
import Navigation from './src/navigation';

export default function App() {
  return (
    <PaperProvider
      theme={theme.light}
      settings={{ icon: props => <FontAwesome {...props} name={props.name as any} /> }}>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar />
      </SafeAreaProvider>
    </PaperProvider>
  );
}
