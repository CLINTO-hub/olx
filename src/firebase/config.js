import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyBYWeAsKCcvfV-JmTprvYx8vGk63Icix8I",
  authDomain: "olx-clone-main-9b576.firebaseapp.com",
  projectId: "olx-clone-main-9b576",
  storageBucket: "olx-clone-main-9b576.appspot.com",
  messagingSenderId: "359826203900",
  appId: "1:359826203900:web:5a2cdc36c060b999c7a379",
  measurementId: "G-YHZJZV35M2"
};
   export default firebase.initializeApp(firebaseConfig)