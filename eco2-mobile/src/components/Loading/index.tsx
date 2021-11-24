import React from 'react';
import {ActivityIndicator, View} from 'react-native';

const Loading: React.FC = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator color="#04d361" size={36} />
    </View>
  );
};

export default Loading;
