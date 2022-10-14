import { FontAwesome } from '@expo/vector-icons';

import { TabBarIconProps } from './types';

const TabBarIcon = ({ focused, ...props }: TabBarIconProps) => {
  return <FontAwesome size={focused ? 31 : 27} style={{ marginBottom: -3 }} {...props} />;
};

export default TabBarIcon;
