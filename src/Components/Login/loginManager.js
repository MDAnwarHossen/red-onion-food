import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider, OAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
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
export const createAccountWithEmailAndPassword = (email, password) => {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password)
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
            // ..
        });
}

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

//........................Update a user's profile..................................
export const updateUserProfile = (name) => {
    const auth = getAuth();
    updateProfile(auth.currentUser, {
        displayName: name,
    }).then(() => {
        // Profile updated!
        // ...
    }).catch((error) => {
        // An error occurred
        // ...
    });
}







// export const handleGoogleSignIn = () => {
//     const provider = new GoogleAuthProvider();
//     const auth = getAuth();
//     signInWithPopup(auth, provider)
//         .then((result) => {
//             const credential = GoogleAuthProvider.credentialFromResult(result);
//             const token = credential.accessToken;
//             const user = result.user;
//             // ...
//         }).catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             const email = error.email;
//             const credential = GoogleAuthProvider.credentialFromError(error);
//             // ...
//         });
// }

// export const handleFacebookSignIn = () => {
//     const provider = new FacebookAuthProvider();

//     const auth = getAuth();
//     signInWithPopup(auth, provider)
//         .then((result) => {
//             const credential = FacebookAuthProvider.credentialFromResult(result);
//             const token = credential.accessToken;
//             const user = result.user;
//             // ...
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             const email = error.email;
//             const credential = FacebookAuthProvider.credentialFromError(error);
//             // ...
//         });

// }