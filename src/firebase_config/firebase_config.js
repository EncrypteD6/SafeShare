import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAD-uVAZl33h6We2ig-FVvE4vibWeCu5cM",
  authDomain: "fir-react-upload-df25b.firebaseapp.com",
  messagingSenderId: "800030412954",
  appId: "1:800030412954:web:378615f1662f9796554f23",
  measurementId: "G-P408H57056",
};

const firebaseApp = initializeApp(firebaseConfig);

const storage = getStorage(firebaseApp);

const auth = getAuth();

export { storage, auth };
