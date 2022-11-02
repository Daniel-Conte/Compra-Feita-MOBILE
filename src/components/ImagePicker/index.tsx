import { Controller } from 'react-hook-form';
import { View, FlatList, Image } from 'react-native';
import { Button, IconButton } from 'react-native-paper';
import type { ImageInfo } from 'expo-image-picker';

import ErrorMessage from '@components/ErrorMessage';
import useImagePicker from './useImagePicker';
import styles from './styles';
import type { ImagePickerProps } from './types';

const ImagePicker = ({
  name,
  defaultValue,
  rules,
  shouldUnregister,
  buttonText,
  imageLimit,
  imagePickerOptions,
  resize,
}: ImagePickerProps) => {
  const { pickImage, deleteImage } = useImagePicker(imagePickerOptions, imageLimit, resize);

  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      rules={rules}
      shouldUnregister={shouldUnregister}
      render={({ field, fieldState: { error } }) => {
        return (
          <View style={styles.container}>
            {field.value?.length && (
              <View style={styles.imageList}>
                <FlatList
                  data={field.value.map((img: ImageInfo) => ({ key: img.uri, img }))}
                  horizontal
                  renderItem={({ item }) => (
                    <View style={styles.imageContainer}>
                      <Image source={{ uri: item.img?.base64 }} style={styles.image} />
                      <IconButton icon="trash-o" onPress={() => deleteImage(item.img.uri, field)} />
                    </View>
                  )}
                />
              </View>
            )}

            {(!imageLimit || !field.value || field.value.length < imageLimit) && (
              <Button mode="outlined" onPress={() => pickImage(field)}>
                {buttonText || 'Selecione'}
              </Button>
            )}

            {error && <ErrorMessage>{error.message}</ErrorMessage>}
          </View>
        );
      }}
    />
  );
};

export default ImagePicker;
