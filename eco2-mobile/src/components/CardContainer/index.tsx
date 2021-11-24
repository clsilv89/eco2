import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

interface ICard extends TouchableOpacityProps {}

const CardContainer: React.FC<ICard> = ({children, style, onPress}) => {
  return (
    <TouchableOpacity style={[styles.card, style]} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingVertical: 20,

    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    minWidth: '48%',

    elevation: 2,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E1E1E5',
    borderRadius: 10,
  } as ViewStyle,
});

export default CardContainer;
