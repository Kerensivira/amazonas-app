import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
//import { facebook, google } from ""

import { typesLogin } from "../Types/types";

    //--------------------Logout----------------------//

export const logoutAsync = () => {
    return (dispatch) => {
        const auth = getAuth();
            signOut((auth))
                .then(({user}) => {
                    dispatch(logoutSync())
                    console.log('Adios', user)
                })
                .catch(error => {
                    console.warn(error);
                })
                
    }
}

export const logoutSync = () => {
    return {
        type: typesLogin.logout
    }
}


//--------------------Validar usuario y contraseña--------------------//
export const loginWithEmailPassAsync = (email, password) => {

    return (dispatch) => {
        const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
                .then(({user}) => {
                    dispatch(loginSincronico(user.email, user.password))
                    console.log('Usuario autorizado');
                }) 
                .catch(error => {
                    console.warn(error, 'No autorizado');
                })
    }
}


export const loginSincronico = (email, password) => {
    return {
        type: typesLogin.login,
        payload: {
            email,
            password
        }
    }
}