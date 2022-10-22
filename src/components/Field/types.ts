import { ControllerProps } from 'react-hook-form';
import { TextInputProps } from 'react-native-paper';

import type { Mask } from '../Form/masks/types';

type ExternalProps = Omit<ControllerProps, 'render'> & Partial<TextInputProps>;

export interface FieldProps extends ExternalProps {
  mask?: Mask;
}
