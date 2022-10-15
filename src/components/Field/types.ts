import { ControllerProps } from 'react-hook-form';
import { TextInputProps } from 'react-native-paper';

type ExternalProps = Omit<ControllerProps, 'render'> & Partial<TextInputProps>;

export interface FieldProps extends ExternalProps {}
