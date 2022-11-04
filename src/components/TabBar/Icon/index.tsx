import { View } from 'react-native';
import { Badge } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';

import { TabBarIconProps } from './types';

const TabBarIcon = ({ focused, badge, ...props }: TabBarIconProps) => {
  return (
    <View>
      {!!badge && (
        <Badge size={14} style={{ position: 'absolute', zIndex: 2 }}>
          {badge}
        </Badge>
      )}
      <FontAwesome size={focused ? 31 : 27} style={{ marginBottom: -3 }} {...props} />
    </View>
  );
};

export default TabBarIcon;
