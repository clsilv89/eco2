import React from 'react';
import {StyleSheet, Text as TextNative, TextInputProps} from 'react-native';

interface IText extends TextInputProps {
  fontSize?: number;
  weight?: 'bold' | '500' | 'normal';
  color?: string;
}

const Text: React.FC<IText> = ({
  children,
  fontSize = 15,
  weight = 'normal',
  style,
  color,
  ...rest
}) => {
  const styleSheet = styles({weight, fontSize, color});

  return (
    <TextNative style={[styleSheet.text, style]} {...rest}>
      {children}
    </TextNative>
  );
};

const styles = ({weight, fontSize, color}: IText) =>
  StyleSheet.create({
    text: {
      fontSize: fontSize,
      fontWeight: weight,
      color: color ? color : '#514766',
    },
  });

export default Text;
