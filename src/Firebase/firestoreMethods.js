import firebaseconfig from './firebase'
import firebase from 'firebase'

export const firestoreMethods={
    addCandidate:(payload)=>{
        firebase.firestore().collection("Candidates").add(payload)
        .then(success=>{
            console.log(success)
        })
        .catch(error=>{
            console.log("Writing Error" + error)
        })
    }
}