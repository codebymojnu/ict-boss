import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();

    // REGISTER A NEW USER //

    const handleRegistration = (displayName, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                verifyEmail();
                setDisplayName(displayName);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    // SIGN IN //

    const handleSignIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                 setUser(userCredential.user);
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    // EMAIL VERIFICATION //

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
        .then(result => {})
    }

    // PASSWORD RESET //

    const handleResetPassword = (email) => {
        sendPasswordResetEmail(auth, email)
        .then(() => {
            
        })
        .catch((error) => {
            setError(error.message);
        })
    }

    // set USER Display Name

    const setDisplayName = (username) => {
        updateProfile(auth.currentUser, { displayName: username })
            .then(result => { })
            .catch((error) => {
                setError(error.message);
            })
    }

    // log out //

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    /* V.V.I 
    
    Without below this code, Authentication is not OK.
    */

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    })


    return {
        user,
        error,
        logOut,
        handleRegistration,
        handleSignIn,
        handleResetPassword
    }
}

export default useFirebase;