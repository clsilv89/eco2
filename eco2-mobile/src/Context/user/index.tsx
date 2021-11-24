import React, {createContext, useContext, useState, useEffect} from 'react';

import api from '../../services/api';

interface Course {
  coursesAvailable: number;
  coursesCompleted: number;
}

interface User {
  _id: string;
  name: string;
  avatar: string;
  courses: Course;
}

interface UserContextProps {
  user: User;
  loading: boolean;
  getUser: () => Promise<void>;
}

const UserContext = createContext<UserContextProps>({} as UserContextProps);

const UserProvider: React.FC = ({children}) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({} as User);

  const getUser = async () => {
    const response = await api.get(`/user/6147c0d8f8a57743c9b6932e`);
    const userData: User = response?.data;
    setUser(userData);
    setLoading(false);
  };

  return (
    <UserContext.Provider value={{user, loading, getUser}}>
      {children}
    </UserContext.Provider>
  );
};

function useUser(): UserContextProps {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within an UserProvider');
  }

  return context;
}

export {UserProvider, useUser};
