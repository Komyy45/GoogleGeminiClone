import { createContext, useState } from "react";
import { auth } from "../Firebase/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword , signInWithPopup , signOut } from "firebase/auth";
import { googleProvider } from "../Firebase/firebase";
import { useContext } from "react";
import {Context as  ApiContext} from "./context"

export const Context = createContext();

export const AuthContext = (props) => {
    const [currentUser , setCurrentUser] = useState(JSON.parse(localStorage.getItem('currentUser')));
    const [Error , setError] = useState(null);

    const signUp = (email , password ) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(function(userCredential){
            console.log(userCredential.user);
            setCurrentUser(auth.currentUser);
            localStorage.setItem('currentUser' , JSON.stringify(auth.currentUser));
        })
        .catch((error) => {
            console.log(error);
            setError(error);
        });
    }

    const login  = (email , password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(function(userCredential){
            console.log(userCredential.user);
            setCurrentUser(auth.currentUser);
            localStorage.setItem('currentUser' , JSON.stringify(auth.currentUser));
        })
        .catch((error) => {
            console.log(error);
            setError(error);
        });
    }
    
    const logOut =  () => {
        signOut(auth)
        .then(function(){
            localStorage.removeItem('currentUser');
            setCurrentUser(null);
            setIsCalled(false);
        })
        .catch((error) => console.log(error));
    }

    const loginUsingGoogle = async () => {
        await signInWithPopup(auth , googleProvider)
        .then(function(user){
            console.log(user);
            setCurrentUser(auth.currentUser)
            localStorage.setItem('currentUser' , JSON.stringify(auth.currentUser));
        })
        .catch((error) => console.log(error));
    }

    const contextValue = {
        signUp , 
        login ,
        logOut ,
        Error ,
        currentUser ,
        loginUsingGoogle , 
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
}
