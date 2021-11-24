import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import Container from '../../components/Container';
import Check from '../../assets/svg/Check.svg';

import {Challenge, useChallenge} from '../../Context/challenge';
import Text from '../../components/Text';
import Loading from '../../components/Loading';
import Button from '../../components/Button';
import ProgressBar from '../../components/ProgressBar';

const ChallengeScreen: React.FC = () => {
  const [error, setError] = useState(false);
  const [questionResponse, setQuestionResponse] = useState<
    'yes' | 'no' | null
  >();

  const {params} = useRoute();
  const {navigate} = useNavigation();

  useEffect(() => {
    // @ts-expect-error
    const courseId = params?.courseId;
    setQuestionResponse(null);
    getChallenge(courseId);
  }, [params]);

  const {
    getChallenge,
    isLoading,
    setResponse,
    challenge,
    totalQuestion,
    currentQuestion,
    sendChallenge,
  } = useChallenge();

  if (isLoading) {
    return <Loading />;
  }

  const handleResponse = (response: 'yes' | 'no') => {
    setError(false);
    setResponse(challenge.questions[currentQuestion]._id, response === 'yes');
    setQuestionResponse(response);
  };

  const handleSend = async () => {
    if (!questionResponse) {
      setError(true);
      return;
    }
    const resume = await sendChallenge();

    Alert.alert(
      resume?.approved ? 'Parabéns' : 'Poxa',
      resume?.approved
        ? `Você acertou ${resume?.result} das perguntas.`
        : `Não foi desta vez, continue estudando e tente novamente.`,
      // @ts-expect-error
      [{onPress: () => navigate('Home'), text: 'Continuar'}],
    );

    setQuestionResponse(null);
  };

  return (
    <Container noScroll panel={false}>
      <View style={styles.headerContainer}>
        <View style={styles.headerText}>
          <Text>Questão {currentQuestion + 1}</Text>
          <Text>de {totalQuestion}</Text>
        </View>
        <ProgressBar actual={currentQuestion + 1} max={totalQuestion} />
      </View>
      <View style={styles.containerQuestions}>
        <Text style={styles.questionText}>
          {challenge.questions[currentQuestion]?.title}
        </Text>

        <TouchableOpacity
          style={[
            styles.optionCard,
            questionResponse === 'yes' && styles.checked,
          ]}
          onPress={() => handleResponse('yes')}>
          <Text>Verdadeiro</Text>
          {questionResponse === 'yes' && (
            <View style={styles.done}>
              <Check />
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.optionCard,
            questionResponse === 'no' && styles.checked,
          ]}
          onPress={() => handleResponse('no')}>
          <Text>Falso</Text>
          {questionResponse === 'no' && (
            <View style={styles.done}>
              <Check />
            </View>
          )}
        </TouchableOpacity>
        {error && (
          <Text color="red" fontSize={12}>
            Selecione uma opção
          </Text>
        )}
      </View>

      <Button
        text={currentQuestion + 1 === totalQuestion ? 'Enviar' : 'Avançar'}
        onPress={handleSend}
      />
    </Container>
  );
};

export default ChallengeScreen;

const styles = StyleSheet.create({
  containerQuestions: {
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  headerContainer: {
    marginTop: 20,
    marginBottom: 40,
  },
  headerText: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 10,
  },
  questionText: {
    color: '#514766',
    fontSize: 20,
    marginBottom: 20,
  },
  optionCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: '#E1E1E5',
    marginBottom: 8,
  },
  checked: {
    backgroundColor: '#E1F5EC',
  },
  done: {
    position: 'absolute',
    right: 10,
    top: 15,
    height: 24,
    width: 24,
    borderRadius: 12,
    backgroundColor: '#04d361',
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
