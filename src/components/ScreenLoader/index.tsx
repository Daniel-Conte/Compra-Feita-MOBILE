import { View } from 'react-native';
import { ActivityIndicator, useTheme } from 'react-native-paper';

import styles from './styles';

const ScreenLoader = () => {
  const theme = useTheme();

  return (
    <View style={{ ...styles.container, backgroundColor: theme.colors.backdrop }}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default ScreenLoader;
