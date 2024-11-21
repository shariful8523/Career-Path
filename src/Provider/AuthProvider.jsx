import { createContext, useEffect, useState } from "react";
import app from "../FireBase/FireBase.config";
export const AuthContext = createContext();
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut,signInWithEmailAndPassword   } from "firebase/auth";



const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, SetUser] = useState();
    const [Loading, SetLoading] = useState(true);

     const createNewUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
     }

        useEffect (()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
         SetUser(currentUser);
         SetLoading(false);
        });
        return ()=>{
            unsubscribe();
        };
        },[])

         const userLogin =(email, password)=>{
             return signInWithEmailAndPassword(auth, email, password);
         };


        const LogOut = () => {
           return signOut(auth);
        };
     
     const authInfo ={
        user, 
        SetUser,
        createNewUser,
        LogOut,
        userLogin,
        Loading,
     };

    return  <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
    
};

export default AuthProvider;