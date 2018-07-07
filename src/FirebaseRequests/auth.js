import firebase from 'firebase';

const registerUser = (user) => {
  return firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
};

const loginUser = (user) => {
  return firebase.auth().signInWithEmailAndPassword(user.email, user.password);
};

const logoutUser = (user) => {
  return firebase.auth().signOut();
};

export default {registerUser, loginUser, logoutUser};
