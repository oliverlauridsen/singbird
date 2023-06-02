// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBW_W6W9QT7xdTsB6gr1FEzF8WmO80ndyI",
	authDomain: "singbird-39ab2.firebaseapp.com",
	projectId: "singbird-39ab2",
	storageBucket: "singbird-39ab2.appspot.com",
	messagingSenderId: "215934203424",
	appId: "1:215934203424:web:f2fd017a112604c618ae45",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log(app);
