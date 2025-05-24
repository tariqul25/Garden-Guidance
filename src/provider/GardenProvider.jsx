import { GardenContext } from './GardenContext';
import { auth } from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';

const GardenProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [like,setLike]=useState(1)
    const [loading,setLoading]=useState(true)
    const [errorMessage,setErrorMessage]=useState('')
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const passSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const provider = new GoogleAuthProvider()

    const GoogleSignIn=()=>{
        return signInWithPopup(auth, provider);
    }
    const passSignOut=()=>{
       return signOut(auth);
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
    });
    return()=>{
            unSubscribe()
        }
}, [])


const gardenInfo = {
    createUser,
    passSignIn,
    user,
    loading,
    passSignOut,
    GoogleSignIn,
    setErrorMessage,
    errorMessage,
    like,
    setLike
}

return (
    <div>
        <GardenContext value={gardenInfo} >
            {children}
        </GardenContext>
    </div>
);
};

export default GardenProvider;