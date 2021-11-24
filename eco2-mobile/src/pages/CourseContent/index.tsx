import {useNavigation, useRoute} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Text from '../../components/Text';
import {Course, useCourse} from '../../Context/course';

const CourseContent: React.FC = () => {
  const [course, setCourse] = useState<Course>({} as Course);

  const {params} = useRoute();
  const {navigate} = useNavigation();
  const {getCourse} = useCourse();

  useEffect(() => {
    // @ts-expect-error
    const courseId = params?.courseId;

    getCourse(courseId).then(course => {
      setCourse(course);
    });
  }, [params]);

  return (
    <Container>
      <Header name="Roberto" avatar="https://i.ibb.co/Zg5ZFXq/profile.jpg" />
      <View
        style={{
          backgroundColor: '#fff',
          padding: 10,
          elevation: 5,
          borderRadius: 5,
        }}>
        <Text>{course.title}</Text>
        <Text>{course.content}</Text>
      </View>
      <Button
        text="Desafio"
        // @ts-expect-error
        onPress={() => navigate('Challenge', {courseId: course._id})}
      />
    </Container>
  );
};

export default CourseContent;
