import React,{useContext,useState,useEffect} from 'react'
import UserHeaderBar from '../Components/UserHeaderBar'
import {firebaseAuth} from '../ContextProviders/UserAuthProvider';

import {firestoreMethods} from '../Firebase/firestoreMethods'


const Homepage =()=>{
    document.title="Voting"
    const{email} = useContext(firebaseAuth).admin
    const{handleSignOut} = useContext(firebaseAuth)

    useEffect(async()=>{
         const candidates= await firestoreMethods.fetchCandidates()
         candidates.onSnapshot(documentSnapshot=>{
             documentSnapshot.docs.map((doc)=>{
                 console.log(doc.data())
             })
         })
         return ()=>{
             candidates()
         }
    },[])
    return(
        <div>
          <UserHeaderBar email={email} handleSignOut={handleSignOut} />
          <h3>WELCOME TO HOMEPAGE</h3>
        </div>
    )
}

export default Homepage