import { Router } from 'express';
import auth from '../middlewares/auth';
import ChallengeRepository, {
  QuestionResponse,
} from '../repositories/ChallengeRepository';
import RegisterRepository from '../repositories/RegistrationRepository';

const challengeRepository = new ChallengeRepository();
const registerRepository = new RegisterRepository();

const challengeRouter = Router();

challengeRouter.get('/:course', auth, async (request, response) => {
  const { course } = request.params;

  const challenge = await challengeRepository.findChallenge(course);

  if (!challenge) {
    return response.status(400);
  }

  return response.json(challenge);
});

challengeRouter.post('/:challenge', auth, async (request, response) => {
  const { challenge } = request.params;
  const { result, userId } = request.body;

  const data = {
    challengeId: challenge,
    questionResponse: result as QuestionResponse[],
  };

  const checkQuestion = await challengeRepository.checkQuestion(data);

  if (!checkQuestion) {
    response.status(400);
  }

  if (checkQuestion?.resume.approved) {
    await registerRepository.completeCourse(checkQuestion.course, userId);
  }

  return response.json(checkQuestion?.resume);
});

export default challengeRouter;
