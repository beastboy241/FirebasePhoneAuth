import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJDDpTwhkuQamAxUcAFR8YPD2Au8ZGSGI",
  authDomain: "sendcode-7c8f4.firebaseapp.com",
  databaseURL: "https://sendcode-7c8f4-default-rtdb.firebaseio.com",
  projectId: "sendcode-7c8f4",
  storageBucket: "sendcode-7c8f4.appspot.com",
  messagingSenderId: "217331328675",
  appId: "1:217331328675:web:0b649d869b939d16000116",
  measurementId: "G-Q7WQ6CSKMT"
};

// Start Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
