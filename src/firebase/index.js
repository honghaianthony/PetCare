// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCNEta-kxD8fbj4xZcYHKjBpeZJexCn1wA",
    authDomain: "petcare-ac6c0.firebaseapp.com",
    projectId: "petcare-ac6c0",
    storageBucket: "petcare-ac6c0.appspot.com",
    messagingSenderId: "254014454464",
    appId: "1:254014454464:web:5eaedfab5f40e3e4210b25",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export { storage };
