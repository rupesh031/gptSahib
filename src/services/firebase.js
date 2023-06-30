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
    errorSet({ setError: setError, errorCode: error.code });
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
    const user = userCredential.user;
    localStorage.setItem("id", user.uid);
  } catch (error) {
    console.log(error);
    errorSet({ setError: setError, errorCode: error.code });
    // throw error;
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

    setSucess(true);
    localStorage.setItem("id", user.uid);
  } catch (error) {
    console.log(error.message);
    setSucess(false);
  }
}

export const getUserByObjectId = async ({ objectId, setUser }) => {
  try {
    const userRef = firebase.firestore().collection("users").doc(objectId);
    const userDoc = await userRef.get();

    if (userDoc.exists) {
      const userData = userDoc.data();

      setUser({
        id: userDoc.id,
        ...userData,
      });
    } else {
      setUser({ error: "User not found" });
      // throw new Error("User not found");
    }
  } catch (error) {
    console.log(error.message);
    setUser({ error: error.message });
  }
};

export const getHistory = async ({ objectId, setUser }) => {
  try {
    const userRef = firebase.firestore().collection("users").doc(objectId);
    const userDoc = await userRef.get();

    if (userDoc.exists) {
      const userData = userDoc.data();

      setUser({
        id: userDoc.id,
        ...userData,
      });
    } else {
      setUser({ error: "User not found" });
      // throw new Error("User not found");
    }
  } catch (error) {
    console.log(error.message);
    setUser({ error: error.message });
  }
};

const fetchHistory = async ({ setHistory }) => {
  try {
    const snapshot = await firebase.firestore().collection("history").get();
    const documents = snapshot.docs.map((doc) => doc.data());
    setHistory(documents);
  } catch (error) {
    console.error("Error retrieving history:", error);
  }
};

const addHistory = async ({ uid, data }) => {
  try {
    await firebase.firestore().collection("history").doc(uid).update(data);
    console.log("Document updated successfully");
  } catch (error) {
    console.error("Error updating document:", error);
  }
};

export const sendPasswordResetEmail = ({ email, setError }) => {
  firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then(() => {
      setError("Password reset email sent successfully");
      // console.log("Password reset email sent successfully");
    })
    .catch((error) => {
      // console.error("Error sending password reset email:", error);
      errorSet({ setError: setError, errorCode: error.code });
    });
};

function errorSet({ setError, errorCode }) {
  switch (errorCode) {
    case "auth/invalid-email":
      setError("Invalid email address.");
      break;
    case "auth/user-disabled":
      setError("This user account has been disabled.");
      break;
    case "auth/user-not-found":
      setError("User not found.");
      break;
    case "auth/wrong-password":
      setError("Incorrect password.");
      break;
    case "auth/email-already-in-use":
      setError("Email address is already in use.");
      break;
    case "auth/weak-password":
      setError("The password is too weak.");
      break;
    case "auth/popup-closed-by-user":
      setError("The sign-in popup was closed by the user.");
      break;
    case "auth/popup-blocked":
      setError("The sign-in popup was blocked by the browser.");
      break;
    case "auth/operation-not-supported-in-this-environment":
      setError("This operation is not supported in the current environment.");
      break;
    case "auth/invalid-verification-code":
      setError("The verification code is invalid.");
      break;

    default:
      setError(errorCode);
      break;
  }
}

export const getResp = async ({ query, setAns, setError }) => {
  try {
    const response = await fetch("http://35.200.212.31:3400/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        mode: "no-cors",
      },
      body: JSON.stringify({ query: { query } }), // Replace with your actual payload
    });

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const responseData = await response.json();
    setAns(response.answer);
  } catch (error) {
    setError(error.message);
  }
};
