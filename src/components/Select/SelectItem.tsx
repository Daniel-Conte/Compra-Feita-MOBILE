import { useFormContext, useFormState } from 'react-hook-form';
import { View } from 'react-native';
import { Menu, Text } from 'react-native-paper';
import { SelectItemProps } from './types';

const SelectItem = ({ children, ...itemProps }: SelectItemProps) => {
  return <Menu.Item title={children} {...itemProps} />;
};

export default SelectItem;
