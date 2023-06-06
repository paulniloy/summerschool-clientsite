import React, { createContext, useEffect, useState } from 'react';
import app from "../../../firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const Authcontext = createContext(null);
const Auth = ({children}) => {
    const auth = getAuth(app);

    const [loggeduser, setloggeduser] = useState('');
    const [username, setusername] = useState('');
    const [photourl, setphotourl] = useState('');
    const [useremail, setuseremail] = useState('');
    const [loader, setloader] = useState(true);

    const logout = () => {
        setloader(true);
        return signOut(auth);
    }

    
    const profileupdate = (name, url) => {
        const user = auth.currentUser;
        if(user){
            updateProfile(user, {
                displayName : `${name}`, photoURL : `${url}`
            })
            .then(()=>{
                setloader(true);
                console.log('profile updated');
            })
            .catch(()=>{
                console.log('not updated');
            })
        }
    }

    const signin = (email, password) =>{
        setloader(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const register = (email, password) => {
        setloader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const google = () => {
        setloader(true);
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }

    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth, (user)=>{
            setloader(false);
            setloggeduser(user)
            console.log(user.displayName, user.photoURL);
            setloggeduser(user);
            console.log(user);
            setusername(user.displayName);
            setphotourl(user.photoURL);
            setuseremail(user.email)
        })
        return ()=> {
           unsubscribe();
        }
    })


    const authinfo = {
        google, useremail, signin, register, profileupdate, loggeduser, username, photourl, logout, loader
    }

    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Auth;