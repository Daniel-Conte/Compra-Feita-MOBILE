import { useState } from 'react';
import { Controller } from 'react-hook-form';
import { Pressable, View } from 'react-native';
import { Menu, TextInput } from 'react-native-paper';

import ErrorMessage from '../ErrorMessage';
import type { SelectProps } from './types';

const Select = ({
  name,
  defaultValue,
  rules,
  shouldUnregister,
  children,
  items,
  ...textInputProps
}: SelectProps) => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      rules={rules}
      shouldUnregister={shouldUnregister}
      render={({ field: { onBlur, onChange, ref, value }, fieldState: { error } }) => (
        <View>
          <Menu
            visible={menuVisible}
            onDismiss={() => setMenuVisible(false)}
            anchor={
              <Pressable onPress={() => setMenuVisible(true)}>
                <>
                  <TextInput
                    {...textInputProps}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    editable={false}
                    ref={ref}
                    error={!!error}
                  />

                  {error && <ErrorMessage>{error.message}</ErrorMessage>}
                </>
              </Pressable>
            }>
            {items.map((item, index) => (
              <Menu.Item
                key={`${name}${index}`}
                onPress={() => {
                  onChange(item.value);
                  setMenuVisible(false);
                }}
                {...item}
              />
            ))}
          </Menu>
        </View>
      )}
    />
  );
};

export default Select;
