import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider, OAuthProvider } from "firebase/auth";
import firebaseConfig from '../../firebase.config';


export const fbProvider = new FacebookAuthProvider();
export const googleProvider = new GoogleAuthProvider();
export const gitHubProvider = new GoogleAuthProvider();
export const twitterProvider = new TwitterAuthProvider();
export const microsoftProvider = new OAuthProvider('microsoft.com');
export const yahooProvider = new OAuthProvider('yahoo.com');

export const initialzeLoginFarmworks = () => {
    const app = initializeApp(firebaseConfig);
}

const socialNetworks = (provider) => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log(user);
            // ...
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            // ...
        });
}
export default socialNetworks;




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