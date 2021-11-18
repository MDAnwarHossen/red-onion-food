import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider, OAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from '../../firebase.config';

export const fbProvider = new FacebookAuthProvider();
export const googleProvider = new GoogleAuthProvider();
export const gitHubProvider = new GoogleAuthProvider();
export const twitterProvider = new TwitterAuthProvider();
export const microsoftProvider = new OAuthProvider('microsoft.com');
export const yahooProvider = new OAuthProvider('yahoo.com');

export const initialzeLoginFarmworks = () => {
    initializeApp(firebaseConfig);
}

//...............Authenticate Using Social Networks ..............................
const socialNetworks = (provider) => {
    const auth = getAuth();
    return signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            return user;
            // ...
        }).catch((error) => {
            const errorInfo = {};
            errorInfo.errorCode = error.code;
            errorInfo.errorMessage = error.message;
            errorInfo.email = error.email;
            return errorInfo;
            // ...
        });
}
export default socialNetworks;

//...............Create a password-based account.......................
// export const createAccountWithEmailAndPassword =  (email, password) => {
//     const auth = getAuth();
//     return createUserWithEmailAndPassword (auth, email, password)
//         .then((userCredential) => {
//             const  user = userCredential.user;
//             return user;
//             // ...
//         })
        
//         .catch((error) => {
//             const errorInfo = {};
//             errorInfo.errorCode = error.code;
//             errorInfo.errorMessage = error.message;
//             return errorInfo;
//             // ..
//         });
// }

//................Sign in a user with an email address and password...............
export const signInAccount = (email, password) => {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            return user;
            // ...
        })
        .catch((error) => {
            const errorInfo = {};
            errorInfo.errorCode = error.code;
            errorInfo.errorMessage = error.message;
            return errorInfo;
        });
}