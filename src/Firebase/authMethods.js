import firebaseconfig from './firebase'
import firebase from 'firebase'


export const authMethods = {
    signup: (email, password,setErrors,setToken) => {
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(user =>{
            console.log(user.user.uid)
        })
        .catch(err =>{
            setErrors(prev => ([...prev, err.message]))
        })
    },
  signin: (email, password,setErrors) => {
    firebase.auth().signInWithEmailAndPassword(email,password,setErrors)
    .then(currentuser=>{
      console.log("I HAVE LOGGED IN")
      console.log(currentuser)
    })
    .catch(error=>{
      console.log("ERROR WITH SIGNIN" + error)
    })
    },
  
  signout: () => {
    firebase.auth().signOut()
    },

     
    
}