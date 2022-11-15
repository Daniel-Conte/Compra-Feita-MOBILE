import * as SplashScreen from 'expo-splash-screen';
import * as Notifications from 'expo-notifications';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';

import useConfigPushNotifications from '@hooks/useConfigPushNotifications';
import useFirstLoad from '@hooks/useFirstLoad';
import themes from './src/config/Theme';
import Navigation from './src/navigation';
import useAppStore from '@store/App';
import ScreenLoader from '@components/ScreenLoader';
import Snackbar from '@components/Snackbar';

SplashScreen.preventAutoHideAsync();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  useConfigPushNotifications();
  const { isAppReady, onLayout } = useFirstLoad();
  const loading = useAppStore(state => state.loading);

  if (!isAppReady) return null;

  return (
    <PaperProvider
      theme={themes.light}
      settings={{ icon: props => <FontAwesome {...props} name={props.name as any} /> }}>
      <SafeAreaProvider onLayout={onLayout}>
        <Navigation />
        <StatusBar />

        {loading && <ScreenLoader />}
        <Snackbar />
      </SafeAreaProvider>
    </PaperProvider>
  );
}
