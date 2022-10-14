import { Text } from 'react-native-paper';

import { TabBarLabelProps } from './types';

const TabBarLabel = ({ focused, color, text }: TabBarLabelProps) => {
  return <Text style={{ color, fontSize: focused ? 11 : 10 }}>{text}</Text>;
};

export default TabBarLabel;
