import {
  launchImageLibraryAsync,
  MediaTypeOptions,
  ImagePickerOptions,
  ImagePickerResult,
  ImagePickerMultipleResult,
  ImageInfo,
} from 'expo-image-picker';
import { manipulateAsync, SaveFormat, SaveOptions } from 'expo-image-manipulator';
import type { ControllerRenderProps } from 'react-hook-form';

import type { ImageResize } from './types';

const useImagePicker = (
  imagePickerOptions?: ImagePickerOptions,
  imageLimit?: number,
  resize?: ImageResize,
) => {
  const pickImage = async (field: ControllerRenderProps) => {
    let result = (await launchImageLibraryAsync({
      ...imagePickerOptions,
      mediaTypes: MediaTypeOptions.Images,
      base64: true,
    })) as ImagePickerResult & ImagePickerMultipleResult;

    if (result && !result.cancelled) {
      let images: ImageInfo[] = field.value || [];

      if (result.selected) {
        images = images.concat(result.selected);
      } else if (result.base64) {
        images.push(result);
      }

      if (images.length) {
        if (imageLimit && images.length > imageLimit) images = images.splice(0, imageLimit);

        images = await Promise.all(images.map(_treatImage));

        field.onChange(images);
      }
    }
  };

  const _treatImage = async (image: ImageInfo) => {
    const extension = _getExtension(image.uri);
    const format = extension === 'png' ? SaveFormat.PNG : SaveFormat.JPEG;

    const imageBase64 = _getBase64(image.base64!, extension);
    const actions = resize ? [{ resize }] : undefined;
    const saveOptions: SaveOptions = { base64: true, format };

    const result = await manipulateAsync(imageBase64, actions, saveOptions);

    return {
      ...image,
      base64: _getBase64(result.base64!, extension),
      extension,
    };
  };

  const _getExtension = (uri: string) => {
    const splitted = uri.split('.');

    return splitted[splitted.length - 1];
  };

  const _getBase64 = (base64: string, extension: string) => {
    return base64?.startsWith('data:image') ? base64 : `data:image/${extension};base64,${base64}`;
  };

  const deleteImage = (uri: string, field: ControllerRenderProps) => {
    const filtered = field.value.filter((image: ImageInfo) => image.uri !== uri);

    field.onChange(filtered.length ? filtered : undefined);
  };

  return { pickImage, deleteImage };
};

export default useImagePicker;
