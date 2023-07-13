import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";

interface AuthStateChangedCallback {
	(uid: string | null): void;
}

const verifyUserAuth = (callback: AuthStateChangedCallback) => {
	onAuthStateChanged(auth, (currentUser) => {
		if (currentUser) {
			const uid = currentUser.uid;
			callback(uid);
		} else {
			callback(null);
		}
	});
};

export default verifyUserAuth;
