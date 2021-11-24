import mongose from 'mongoose';
import app from './app';

mongose
  .connect(
    'mongodb+srv://server:psE0INIM5EIPGnI7@eco2.hs1wa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  )
  .then(() => console.log('🚀 Database Connected!'));

app.listen(3333, () => {
  console.log('🚀 Server started on port 3333!');
});
