import React from 'react';
import {ChallengeProvider} from './challenge';
import {CourseProvider} from './course';

import {UserProvider} from './user';

const AppProvider: React.FC = ({children}) => {
  return (
    <UserProvider>
      <CourseProvider>
        <ChallengeProvider>{children}</ChallengeProvider>
      </CourseProvider>
    </UserProvider>
  );
};

export default AppProvider;
