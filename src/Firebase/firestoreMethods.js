import firebaseconfig from './firebase'
import firebase from 'firebase'

export const firestoreMethods={
    fetchDetails:(collection,ID)=>{
        firebase
        .firestore()
        .collection(collection)
        .doc(docsnapshot=>{
            
            return docsnapshot
        })
    },
    
}