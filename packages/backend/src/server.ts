import '../envConfig';
import app from '@/app';
import { initializeFirebase } from '@/firebase';
import { type User } from 'types';
import sl from '@/serviceLocator';

import UserDao from '@/daos/UserDao';

sl.set('UserDao', UserDao);

declare global {
  namespace Express {
    interface Request {
      user: User | null;
    }
  }
}

initializeFirebase((err) => {
  if (err) {
    console.error(err); // eslint-disable-line no-console
  } else {
    app.listen(8082, () => {
      console.log('Listening on port 8082'); // eslint-disable-line no-console
    });
  }
});
