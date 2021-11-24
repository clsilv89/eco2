import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import {useUser} from '../../Context/user';
import Text from '../Text';

const CourseMetric: React.FC = () => {
  const {user} = useUser();

  const userProgress = Number(
    (
      (user.courses.coursesCompleted / user.courses.coursesAvailable) *
      100
    ).toFixed(0),
  );
  return (
    <View style={styles.container}>
      <View style={styles.containerStatus}>
        <ProgressCircle
          percent={userProgress}
          radius={30}
          borderWidth={8}
          color="#04d361"
          shadowColor="#999"
          bgColor="#fff">
          <Text style={{fontSize: 16}}>{userProgress}%</Text>
        </ProgressCircle>
      </View>
      <View style={styles.containerText}>
        <Text fontSize={18}>Aprender liberta</Text>
        <Text fontSize={13}>
          Conscientização é o primeiro passo para salvar o mundo
        </Text>
      </View>
    </View>
  );
};

export default CourseMetric;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 15,
    elevation: 5,
    marginBottom: 20,
  } as ViewStyle,
  containerStatus: {
    marginRight: 20,
  },
  containerText: {
    flexDirection: 'column',
    flex: 1,
  },
});
