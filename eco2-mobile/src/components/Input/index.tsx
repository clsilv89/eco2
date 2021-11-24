import React from 'react';
import {View, TextInput, StyleSheet, ViewStyle} from 'react-native';

interface IInput {
  text: string;
  setText: any;
  placeholder?: string;
}

export const Input: React.FC<IInput> = ({text, setText, placeholder}) => {
  return (
    <View style={style.wrap}>
      <TextInput
        style={style.input}
        value={text}
        onChange={data => setText(data)}
        placeholder={placeholder}
      />
    </View>
  );
};

const style = StyleSheet.create({
  wrap: {
    height: 48,

    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#E1E1E5',
    backgroundColor: '#fff',

    paddingHorizontal: 10,
  } as ViewStyle,
  input: {
    color: '#000',
    fontSize: 14,
  },
});
