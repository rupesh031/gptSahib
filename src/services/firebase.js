import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCPmQngpOEGe8NCFAPdraSSxkH7ogstc6w",
  authDomain: "gptsahib-e26ab.firebaseapp.com",
  projectId: "gptsahib-e26ab",
  storageBucket: "gptsahib-e26ab.appspot.com",
  messagingSenderId: "676228888864",
  appId: "1:676228888864:web:bac29dd21aed4d91fc7f45",
};

firebase.initializeApp(firebaseConfig);

export async function signUpWithEmailPassword({
  email,
  password,
  name,
  setSucess,
  setError,
}) {
  try {
    const userCredential = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    await sendEmailVerification();
    setError("Verify Mail");
    const user = userCredential.user;
    await createUserDocument(user.uid, name, email);
    setSucess(true);
    return user;
  } catch (error) {
    setError(error.message);
  }
}

export async function sendEmailVerification() {
  try {
    const user = firebase.auth().currentUser;
    await user.sendEmailVerification();
  } catch (error) {
    throw error;
  }
}

export async function signInWithEmailPassword(
  email,
  pass,
  setSucess,
  setError
) {
  try {
    console.log("hello");
    const userCredential = await firebase
      .auth()
      .signInWithEmailAndPassword(email, pass);
    setSucess(true);
    localStorage.setItem("login", "true");
    console.log("hello");
    return userCredential.user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function createUserDocument(userId, name, email) {
  try {
    const userRef = firebase.firestore().collection("users").doc(userId);
    await userRef.set({
      name: name,
      email: email,
      objectId: userId,
    });
  } catch (error) {
    throw error;
  }
}

export async function signInWithGoogle({ setSucess }) {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    const userCredential = await firebase.auth().signInWithPopup(provider);

    const user = userCredential.user;
    const name = user.displayName;
    const email = user.email;
    await createUserDocument(user.uid, name, email);

    console.log("Sign up with Google successful");
    setSucess(true);
  } catch (error) {
    console.log(error.message);
    setSucess(false);
  }
}
