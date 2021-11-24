import mongoose from 'mongoose';

export interface IUser {
  _id: string;
  name: string;
  avatar: string;
}

const User = new mongoose.Schema<IUser>({
  name: String,

  avatar: String,
});

export default mongoose.model('User', User);
