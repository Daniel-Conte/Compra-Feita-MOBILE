import { useState } from 'react';
import { Controller } from 'react-hook-form';
import { Pressable, View } from 'react-native';
import { Menu, Subheading, TextInput } from 'react-native-paper';

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
                <View>
                  <TextInput
                    {...textInputProps}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    editable={false}
                    ref={ref}
                    error={!!error}
                  />
                  {value?.title &&
                    (typeof value.title === 'string' ? (
                      <Subheading style={{ position: 'absolute', top: 27, left: 12 }}>
                        {value.title}
                      </Subheading>
                    ) : (
                      value.title
                    ))}

                  {error && <ErrorMessage>{error.message}</ErrorMessage>}
                </View>
              </Pressable>
            }>
            {items.map((item, index) => (
              <Menu.Item
                key={`${name}${index}`}
                onPress={() => {
                  onChange({ value: item.value, title: item.title });
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
