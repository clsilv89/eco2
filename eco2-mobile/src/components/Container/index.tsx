import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

interface IContainer {
  panel?: boolean;
  noScroll?: boolean;
}

const Container: React.FC<IContainer> = ({
  children,
  panel = true,
  noScroll = false,
}) => {
  if (noScroll) {
    return (
      <View style={styles.wrap}>
        {panel && <View style={styles.panel} />}
        <View style={styles.container}>{children}</View>
      </View>
    );
  }
  return (
    <ScrollView style={styles.scroll}>
      <SafeAreaView style={styles.wrap}>
        {panel && <View style={styles.panel} />}
        <View style={styles.container}>{children}</View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#fff',
  } as ViewStyle,
  wrap: {
    position: 'relative',
    flex: 1,
  } as ViewStyle,
  container: {
    paddingHorizontal: 20,
    paddingBottom: 8,
    width: '100%',
  } as ViewStyle,
  panel: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 150,
    backgroundColor: '#04D361',
  } as ViewStyle,
});

export default Container;
