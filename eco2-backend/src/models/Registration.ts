import mongoose from 'mongoose';

export interface IRegistration {
  _id: string;

  user: string;

  course: string;

  status: string;
}

const Registration = new mongoose.Schema<IRegistration>({
  user: String,

  course: String,

  status: String,
});

export default mongoose.model('Registration', Registration);
