import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, RecaptchaVerifier, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPhoneNumber, signOut, updateProfile } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if(user){
                console.log('state in inside', user);
                setUser(user);
            }
        })
    }, [auth])

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

// Phone Registration //

  const handlePhoneRegistration = (phoneNumber) => {
    window.recaptchaVerifier = new RecaptchaVerifier('re-capca', {
        'size': 'invisible',
        'callback': (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        }
      }, auth);
      
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      // ...
    }).catch((error) => {
      console.log('sms not send');
    });
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
        window.location.pathname = '/'
    }

    return {
        user,
        error,
        logOut,
        handleRegistration,
        handleSignIn,
        handleResetPassword,
        handlePhoneRegistration
    }
}

export default useFirebase;