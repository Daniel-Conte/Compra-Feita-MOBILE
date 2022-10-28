import type { ReactNode } from 'react';
import type { ControllerProps } from 'react-hook-form';
import type { MenuItemProps, TextInputProps } from 'react-native-paper';

type ExternalProps = Omit<ControllerProps, 'render'> & Partial<TextInputProps>;

export interface SelectProps extends ExternalProps {}

export interface SelectItemProps extends Omit<MenuItemProps, 'title'> {
  children: ReactNode;
}
