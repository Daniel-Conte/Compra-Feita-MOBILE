import { TouchableRipple } from 'react-native-paper';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';

const TabBarButton = (props: BottomTabBarButtonProps) => <TouchableRipple {...props} borderless />;

export default TabBarButton;
