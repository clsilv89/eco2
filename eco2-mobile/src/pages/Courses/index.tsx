import React, {useCallback} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Card from '../../components/Card';
import Container from '../../components/Container';
import Header from '../../components/Header';

import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useCourse} from '../../Context/course';
import CourseMetric from '../../components/CourseMetric';

const Courses: React.FC = () => {
  const navigation = useNavigation();
  const {course, getAvailableCourses} = useCourse();

  useFocusEffect(
    useCallback(() => {
      getAvailableCourses();
    }, []),
  );

  return (
    <Container>
      <Header name="Roberto" avatar="https://i.ibb.co/Zg5ZFXq/profile.jpg" />
      <CourseMetric />

      <View style={styles.container}>
        {course.map(course => (
          <Card
            key={course._id}
            style={styles.card}
            Image={() => (
              <Image
                source={{uri: course.image}}
                resizeMode="contain"
                style={{width: '100%', height: 60}}
              />
            )}
            text={course.title}
            done={course.status === 'done'}
            stats={false}
            onPress={() =>
              navigation.navigate('CourseContent', {
                courseId: course._id,
              })
            }
          />
        ))}
      </View>
    </Container>
  );
};

export default Courses;

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    marginBottom: 10,
  },
});
