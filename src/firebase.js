import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMfQoozHI4fW96rno0XtQcnWuVIZx9srY",
  authDomain: "greenwoodscheduler.firebaseapp.com",
  projectId: "greenwoodscheduler",
  storageBucket: "greenwoodscheduler.appspot.com",
  messagingSenderId: "23549447090",
  appId: "1:23549447090:web:0f2afb22b251002b75b2ab"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);