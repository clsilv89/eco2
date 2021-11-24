import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';

interface IProgressBar {
  max?: number;
  actual?: number;
}

const ProgressBar: React.FC<IProgressBar> = ({max, actual}) => {
  const style = styles({max, actual});

  return (
    <View style={style.bar}>
      <View style={style.progress} />
    </View>
  );
};

const styles = ({max, actual}: {max?: number; actual?: number}) => {
  const maxCounter = max ? max : 0;
  const actualCounter = actual ? actual : 0;
  const progressBarWidth = (actualCounter / maxCounter) * 100;

  return StyleSheet.create({
    bar: {
      height: 4,
      flex: 1,
      backgroundColor: '#E1E5E3',
      borderRadius: 1,

      marginHorizontal: 5,
    } as ViewStyle,
    progress: {
      height: 4,
      width: `${progressBarWidth}%`,
      backgroundColor: '#04d361',
    } as ViewStyle,
  });
};

export default ProgressBar;
