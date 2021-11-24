import mongoose from 'mongoose';

export interface ICourse {
  _id: string;
  title: string;
  content: string;
  image: string;
  status?: 'done' | 'open';
}

const Course = new mongoose.Schema<ICourse>({
  title: String,

  content: String,

  image: String,

  status: String,
});

export default mongoose.model('Course', Course);
