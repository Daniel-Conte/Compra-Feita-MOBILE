import { ReactNode } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

const HideKeyboardOnTouchOutside = ({ children }: { children: ReactNode }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
};

export default HideKeyboardOnTouchOutside;
