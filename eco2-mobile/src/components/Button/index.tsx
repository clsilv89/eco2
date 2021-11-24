import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import Text from '../Text';

interface IButton extends TouchableOpacityProps {
  text: string;
}

const Button: React.FC<IButton> = ({text, style, ...rest}) => {
  return (
    <TouchableOpacity style={[styles.button, style]} {...rest}>
      <Text fontSize={14} weight="bold" color="#fff">
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 48,
    backgroundColor: '#04D361',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  } as ViewStyle,
});

export default Button;
