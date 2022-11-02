import type { ControllerProps } from 'react-hook-form';
import type { ImagePickerOptions } from 'expo-image-picker';

type ExternalProps = Omit<ControllerProps, 'render'>;

export interface ImagePickerProps extends ExternalProps {
  buttonText?: string;
  imagePickerOptions?: ImagePickerOptions;
  imageLimit?: number;
  resize?: ImageResize;
}

export type ImageResize = {
  height?: number;
  width?: number;
};
