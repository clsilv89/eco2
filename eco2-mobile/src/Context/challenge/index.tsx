import React, {createContext, useContext, useState, useEffect} from 'react';

import api from '../../services/api';

interface ChallengeResult {
  approved: boolean;
  result: string;
}

interface Questions {
  _id: string;
  title: string;
  result?: boolean;
}

export interface Challenge {
  _id: string;
  course: string;
  questions: Questions[];
}

interface ChallengeProps {
  challenge: Challenge;
  getChallenge: (courseId: string) => Promise<Challenge>;
  sendChallenge: () => Promise<ChallengeResult | void>;
  setResponse: (courseId: string, response: boolean) => any;
  isLoading: boolean;
  currentQuestion: number;
  totalQuestion: number;
}

const ChallengeContext = createContext<ChallengeProps>({} as ChallengeProps);

const ChallengeProvider: React.FC = ({children}) => {
  const [challenge, setChallenge] = useState<Challenge>({} as Challenge);
  const [isLoading, setIsloading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalQuestion, setTotalQuestion] = useState(0);

  useEffect(() => {
    setCurrentQuestion(0);
  }, [challenge]);

  const getChallenge = async (courseId: string): Promise<Challenge> => {
    return api.get(`/challenge/${courseId}`).then(({data}) => {
      const challenge: Challenge = data;
      setChallenge(challenge);
      setTotalQuestion(challenge.questions.length);
      setIsloading(false);
      return challenge;
    });
  };

  const setResponse = (questionId: string, response: boolean): void => {
    const questionIndex = challenge.questions.findIndex(
      question => questionId === question._id,
    );

    const newChallenge = challenge;

    newChallenge.questions[questionIndex].result = response;

    setChallenge(newChallenge);
  };

  const sendChallenge = async (): Promise<ChallengeResult | void> => {
    if (currentQuestion + 1 !== totalQuestion) {
      setCurrentQuestion(old => old + 1);
      return;
    }

    const data = challenge.questions.map(question => {
      return {
        id: question._id,
        result: question?.result,
      };
    });

    return api
      .post(`/challenge/${challenge._id}`, {
        result: data,
      })
      .then(({data}) => {
        const challengeResult: {approved: boolean; result: string} = data;

        return challengeResult;
      });
  };

  return (
    <ChallengeContext.Provider
      value={{
        challenge,
        getChallenge,
        setResponse,
        isLoading,
        currentQuestion,
        totalQuestion,
        sendChallenge,
      }}>
      {children}
    </ChallengeContext.Provider>
  );
};

function useChallenge(): ChallengeProps {
  const context = useContext(ChallengeContext);

  if (!context) {
    throw new Error('useUser must be used within an CourseProvider');
  }

  return context;
}

export {ChallengeProvider, useChallenge};
