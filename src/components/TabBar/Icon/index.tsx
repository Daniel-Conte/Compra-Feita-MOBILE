import { View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { TabBarIconProps } from './types';

const TabBarIcon = ({ focused, ...props }: TabBarIconProps) => {
  return (
    <View>
      <FontAwesome size={focused ? 31 : 27} style={{ marginBottom: -3 }} {...props} />
    </View>
  );
};

export default TabBarIcon;
