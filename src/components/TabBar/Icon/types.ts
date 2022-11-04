import { FontAwesome } from '@expo/vector-icons';

export interface TabBarIconProps {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  focused: boolean;
  color: string;
}
