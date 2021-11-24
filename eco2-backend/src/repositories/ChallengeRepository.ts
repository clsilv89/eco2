import Challenge, { IChallenge } from '../models/Challenge';
import Questions from '../models/Questions';

export interface QuestionResponse {
  id: string;
  result: boolean;
}

class ChallengeRepository {
  private challenges: IChallenge[];

  constructor() {
    this.challenges = [] as IChallenge[];
  }

  public all(): IChallenge[] {
    return Challenge.find();
  }

  public async findChallenge(courseId: string): Promise<IChallenge> {
    const challenge: IChallenge = await Challenge.findOne({
      course: courseId,
    }).populate({
      path: 'questions',
      select: ['title'],
    });

    return challenge;
  }

  public async checkQuestion({
    challengeId,
    questionResponse,
  }: {
    challengeId: string;
    questionResponse: QuestionResponse[];
  }) {
    try {
      let countCorrects = 0;

      const challenge: IChallenge = await Challenge.findOne({
        _id: challengeId,
      }).populate({ path: 'questions' });

      challenge.questions.map(question =>
        questionResponse.map(response => {
          if (question._id == response.id) {
            if (question.result === response.result) {
              countCorrects += 1;
            }
          }
        }),
      );

      const course = challenge?.course;

      const questionsLenght = challenge?.questions.length
        ? challenge?.questions.length
        : 0;

      const percentCorrect = (countCorrects / questionsLenght) * 100;

      const data = {
        approved: percentCorrect > 70,
        result: `${percentCorrect}%`,
      };

      countCorrects = 0;

      return {
        resume: data,
        course,
      };
    } catch (err) {
      console.error(err);
    }
  }
}

export default ChallengeRepository;
