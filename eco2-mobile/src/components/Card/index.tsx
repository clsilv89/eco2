import React from 'react';
import {StyleSheet, TextStyle, View, ViewStyle} from 'react-native';

import Check from '../../assets/svg/Check.svg';
import CardContainer from '../CardContainer';
import ProgressBar from '../ProgressBar';
import Text from '../Text';

interface ICard {
  onPress: () => void;
  Image: React.FC;
  text: string;
  lessons?: number;
  actual?: number;
  style?: ViewStyle;
  stats?: boolean;
  done?: boolean;
}

const Card: React.FC<ICard> = ({
  Image,
  text,
  lessons,
  actual,
  style,
  stats = true,
  onPress,
  done,
}) => {
  return (
    <CardContainer style={[styles.container, style]} onPress={onPress}>
      {done && (
        <View style={styles.done}>
          <Check />
        </View>
      )}
      {Image && <Image />}
      <View style={styles.wrap}>
        <Text style={styles.title}>{text}</Text>
        {stats && (
          <View style={styles.bottom}>
            <Text fontSize={12} color="#A6A1B2">
              {actual} de {lessons}
            </Text>
            <ProgressBar max={lessons} actual={actual} />
          </View>
        )}
      </View>
    </CardContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    padding: 4,
  } as ViewStyle,
  wrap: {
    width: '100%',
  } as ViewStyle,
  title: {
    marginVertical: 12,
    alignSelf: 'center',
    textAlign: 'center',
  } as TextStyle,

  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
  } as ViewStyle,

  done: {
    position: 'absolute',
    right: 10,
    top: 10,
    height: 24,
    width: 24,
    borderRadius: 12,
    backgroundColor: '#04d361',
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
});

export default Card;
