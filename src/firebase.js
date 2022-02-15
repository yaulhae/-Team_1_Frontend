import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAoETkeLzP4KJxX5Go8yGXelzQO4NwflUg",
  authDomain: "daily-write.firebaseapp.com",
  projectId: "daily-write",
  storageBucket: "daily-write.appspot.com",
  messagingSenderId: "36902933010",
  appId: "1:36902933010:web:a0d5f4e4a372b25738fecb",
};

const apiKey = firebaseConfig.apiKey;
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
export { apiKey, storage };
