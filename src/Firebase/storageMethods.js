import firebaseconfig from './firebase'
import firebase from 'firebase'

export const storageMethods={
    storeImage:(imageUrl,candidateName)=>{
        
        if(imageUrl===" "){
            return console.error(`not an image, the image file is a ${typeof(imageUrl)}`)
        }
        const uploadTask = firebase.storage().ref(`/CandidateImages/${candidateName}`).put(imageUrl)
        return uploadTask
    },
    getImageDownloadURL:async(candidateName)=>{
        return await firebase.storage().ref(`/CandidateImages/${candidateName}`)
        .getDownloadURL()
    }
    
}