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
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(currentuser=>{
      console.log("I HAVE LOGGED IN")
      console.log(currentuser)
    })
    .catch(error=>{
      switch(error){
        case 'auth/invalid-email' : 
          setErrors({emailstate:true,message:error.message})
        break;
        default:
      }
    })
    },
  
  signout: () => {
    firebase.auth().signOut()
    },

     
    
}