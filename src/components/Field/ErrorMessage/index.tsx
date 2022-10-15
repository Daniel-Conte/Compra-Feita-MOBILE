import { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, useTheme } from 'react-native-paper';

import { FontAwesome } from '@expo/vector-icons';

const ErrorMessage = ({ children }: { children: ReactNode }) => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <FontAwesome name="exclamation-triangle" style={styles.icon} color={theme.colors.error} />
      <Text style={{ color: theme.colors.error }}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', paddingVertical: 3, paddingLeft: 5 },
  icon: { paddingRight: 3 },
});

export default ErrorMessage;
