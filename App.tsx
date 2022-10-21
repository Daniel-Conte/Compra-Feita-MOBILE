import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';

import themes from './src/config/Theme';
import Navigation from './src/navigation';
import useAppStore from '@store/App';
import ScreenLoader from '@components/ScreenLoader';
import Snackbar from '@components/Snackbar';

export default function App() {
  const loading = useAppStore(state => state.loading);

  return (
    <PaperProvider
      theme={themes.light}
      settings={{ icon: props => <FontAwesome {...props} name={props.name as any} /> }}>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar />

        {loading && <ScreenLoader />}
        <Snackbar />
      </SafeAreaProvider>
    </PaperProvider>
  );
}
