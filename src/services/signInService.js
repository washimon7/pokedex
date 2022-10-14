import { user, userDetails } from '../utils/userDB';

export const signInService = userForm => {
  return new Promise(resolve => {
    setTimeout(() => {
      if (
        userForm.username === user.username &&
        userForm.password === user.password
      ) {
        resolve(userDetails);
      } else {
        resolve(null);
      }
    }, 2000);
  });
};
