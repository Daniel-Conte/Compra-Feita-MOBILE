import { View } from 'react-native';
import { ActivityIndicator, Portal, useTheme } from 'react-native-paper';

import styles from './styles';

const ScreenLoader = () => {
  const theme = useTheme();

  return (
    <Portal>
      <View style={{ ...styles.container, backgroundColor: theme.colors.backdrop }}>
        <ActivityIndicator size="large" />
      </View>
    </Portal>
  );
};

export default ScreenLoader;
