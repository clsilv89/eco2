import React, {createContext, useContext, useState, useEffect} from 'react';

import api from '../../services/api';

export interface Course {
  _id: string;
  title: string;
  image: string;
  content: string;
  status: 'open' | 'done';
}

interface CourseContextProps {
  course: Course[];
  getCourse: (courseId: string) => Promise<Course>;
  getAvailableCourses: () => Promise<void>;
}

const CourseContext = createContext<CourseContextProps>(
  {} as CourseContextProps,
);

const CourseProvider: React.FC = ({children}) => {
  const [course, setCourses] = useState<Course[]>([]);

  const getAvailableCourses = async (): Promise<void> => {
    api
      .get('/course')
      .then(response => {
        setCourses(response.data);
      })
      .catch(err => console.log({err}));
  };

  const getCourse = async (courseId: string): Promise<Course> => {
    return api.get(`/course/${courseId}`).then(({data}) => {
      const group: Course = data;
      return group;
    });
  };

  return (
    <CourseContext.Provider value={{course, getCourse, getAvailableCourses}}>
      {children}
    </CourseContext.Provider>
  );
};

function useCourse(): CourseContextProps {
  const context = useContext(CourseContext);

  if (!context) {
    throw new Error('useUser must be used within an CourseProvider');
  }

  return context;
}

export {CourseProvider, useCourse};
