import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB7E3ED8IOStwJEIRHuZHEeuidUzmWawIw",
  authDomain: "furniture-ecommerce-841f4.firebaseapp.com",
  projectId: "furniture-ecommerce-841f4",
  storageBucket: "furniture-ecommerce-841f4.appspot.com",
  messagingSenderId: "396811360015",
  appId: "1:396811360015:web:cf56546089a5ff306cd07a",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
