import mongoose from 'mongoose';

export interface IQuestion {
  _id: String;
  title: string;
  result?: boolean;
}

const Questions = new mongoose.Schema<IQuestion>({
  title: String,
  result: Boolean,
});

export default mongoose.model('Questions', Questions);
