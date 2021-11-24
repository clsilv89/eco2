import mongoose from 'mongoose';

import Questions, { IQuestion } from './Questions';

export interface IChallenge {
  _id: String;
  course: string;
  questions: IQuestion[];
}

const Challenge = new mongoose.Schema<IChallenge>({
  course: String,
  questions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: Questions,
    },
  ],
});

export default mongoose.model('Challenge', Challenge);
