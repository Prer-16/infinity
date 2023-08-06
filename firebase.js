import { initializeApp } from "firebase/app";

import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK7ZJfbpsZiH2a7wfqBje0iVMk8y61nkk",
  authDomain: "upload-docs-e5e50.firebaseapp.com",
  projectId: "upload-docs-e5e50",
  storageBucket: "upload-docs-e5e50.appspot.com",
  messagingSenderId: "399047399017",
  appId: "1:399047399017:web:cf20538857eb6e7c1c34f8",
  measurementId: "G-Z7SVY1M5R2"
};
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);