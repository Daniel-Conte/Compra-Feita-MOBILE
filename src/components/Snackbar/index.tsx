import { View } from 'react-native';
import { Snackbar as PaperSnackbar, Text, useTheme } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';

import { variantIcons, variantStyles } from '@config/Theme';
import useAppStore from '@store/App';
import styles from './styles';

const Snackbar = () => {
  const snackbar = useAppStore(state => state.snackbar);
  const toggleSnackbar = useAppStore(state => state.toggleSnackbar);

  const customTheme = snackbar?.variant ? variantStyles[snackbar.variant] : {};
  const theme = useTheme({ colors: { ...customTheme } });

  return (
    <PaperSnackbar
      visible={!!snackbar}
      theme={theme}
      {...snackbar}
      onDismiss={() => {
        snackbar?.onDismiss?.();
        toggleSnackbar(null);
      }}>
      <View style={styles.contentWrapper}>
        {snackbar?.variant && (
          <FontAwesome
            name={variantIcons[snackbar.variant]}
            size={20}
            color={theme.colors.text}
            style={styles.icon}
          />
        )}
        <Text theme={theme}>{snackbar?.title}</Text>
      </View>
    </PaperSnackbar>
  );
};

export default Snackbar;
