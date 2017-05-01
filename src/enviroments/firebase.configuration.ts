import { AuthProviders, AuthMethods } from 'angularfire2';

export const firebaseConfig = {
    apiKey: "AIzaSyAaJEYQox-nue8aBp9uRLt6Y8sNrPDWyzs",
    authDomain: "tesis-7ffec.firebaseapp.com",
    databaseURL: "https://tesis-7ffec.firebaseio.com",
    projectId: "tesis-7ffec",
    storageBucket: "tesis-7ffec.appspot.com",
    messagingSenderId: "243420000366"
}

export const authenticationConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
}