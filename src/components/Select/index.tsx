import { useState } from 'react';
import { Controller, useFormContext, useFormState } from 'react-hook-form';
import { Pressable, View } from 'react-native';
import { Menu, TextInput } from 'react-native-paper';

import ErrorMessage from '../ErrorMessage';
import Item from './SelectItem';
import type { SelectItemProps, SelectProps } from './types';

const Select = ({
  name,
  defaultValue,
  rules,
  shouldUnregister,
  children,
  ...textInputProps
}: SelectProps) => {
  const { control } = useFormContext();
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
                    //onPressOut={() => setMenuVisible(true)}
                    value={value}
                    editable={false}
                    ref={ref}
                    error={!!error}
                  />

                  {error && <ErrorMessage>{error.message}</ErrorMessage>}
                </>
              </Pressable>
            }>
            <SelectItemm>Teste</SelectItemm>
            {children}
          </Menu>
        </View>
      )}
    />
  );
};

const SelectItemm = ({ children, ...itemProps }: SelectItemProps) => {
  const form = useFormContext();

  console.log(form);
  return <></>;
};

Select.Item = Item;

export default Select;
