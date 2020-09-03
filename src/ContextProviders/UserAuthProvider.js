import React,{useState,useEffect} from 'react';
import firebase,{auth} from 'firebase'
import {authMethods} from '../Firebase/authMethods'
export const firebaseAuth = React.createContext()

const AuthProvider = (props) => {
    const [initializing, setInit] = useState(true)
    const [inputs, setInputs] = useState({email: '', password: ''})
  const [errors, setErrors] = useState(null)
  const [errorState, setErrorState] = useState({email:false,password:false})
  const [token, setToken] = useState(null)
  const [userID,setUserID] =useState(null)
  const [admin,setAdmin] =useState(null)


  useEffect(()=>{
      const subscriber =firebase.auth().onAuthStateChanged(currentUser=>{
          if(initializing){
              setInit(false)
          }
          console.log("ADKABDJA")
          setAdmin({currentUser})
          // setUserID(currentUser.uid)
          //   console.log(userID)
      })
      return () =>{
          subscriber()
      }
  },[])


    const handleSignup = () => {
        return authMethods.signup(inputs.email,inputs.password,setErrors,setToken)
    }

    const handleSignIn=()=>{
      return authMethods.signin(inputs.email,inputs.password,setErrors)
      
    }

    const handleSignOut=()=>{
      return authMethods.signout()
    }

    return (
        <firebaseAuth.Provider value={{
            userID,
            admin,
            handleSignup,
            handleSignOut,
            handleSignIn,
            inputs,
            setInputs,
            errors
            }}>
          {props.children}
        </firebaseAuth.Provider>
      )
};

export default AuthProvider;
