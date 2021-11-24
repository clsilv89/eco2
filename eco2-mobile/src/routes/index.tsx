import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../pages/Home';
import CourseContent from '../pages/CourseContent';
import Courses from '../pages/Courses';
import Hub from '../pages/Hub';
import ChallengeScreen from '../pages/Challenge';

declare global {
  namespace ReacNavigation {
    interface RootParamList {
      Home: undefined;
      Hub: undefined;
      CourseContent: {
        courseId: string;
      };
      Courses: undefined;
      Challenge: undefined;
    }
  }
}

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Hub" component={Hub} />
        <Stack.Screen
          name="CourseContent"
          component={CourseContent}
          initialParams={{courseId: ''}}
        />
        <Stack.Screen name="Courses" component={Courses} />
        <Stack.Screen name="Challenge" component={ChallengeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
