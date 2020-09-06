import React,{useContext,useState,useEffect} from 'react'
import UserHeaderBar from '../Components/UserHeaderBar'
import {firebaseAuth} from '../ContextProviders/UserAuthProvider';
import { List, Card, Space } from 'antd';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import {Button} from '@material-ui/core'

import {firestoreMethods} from '../Firebase/firestoreMethods'

import CandidateComponent from '../Components/CandidateComponent'


const Homepage =()=>{
    document.title="Voting"
    const{email} = useContext(firebaseAuth)
    const{handleSignOut} = useContext(firebaseAuth)
    const[fetchedCandidates,setFetchedCandidates]=useState([])

    const Vote=()=>{

    }

    const fetchingUser=async()=>{
        const list =[]
        const candidates= await firestoreMethods.fetchCandidates()
         candidates.onSnapshot(documentSnapshot=>{
             const fetchCandidates=documentSnapshot.docs.map((doc)=>{
                 console.log(doc.id)
                 const id=doc.id
                 const data=doc.data()
                 return {
                     data,
                     id
                 }
             })
             
             list.push([...fetchCandidates])
             setFetchedCandidates([...fetchCandidates])
             
         })
         console.log(list)
         
    }

    useEffect(()=>{
         fetchingUser()
         console.log(fetchedCandidates)
    },[])

    

    // console.log(candidates)
    return(
        <div>
          <UserHeaderBar email={email} handleSignOut={handleSignOut} />
          <div style={{marginTop:10,width:600,margin:"0 auto"}}>
              <List
              itemLayout="horizontal"
              size="large"
              dataSource={fetchedCandidates}
              renderItem={item=>(
                  <div style={{
                      display:"flex",
                      flexDirection:"row",
                      justifyContent:"space-between",
                      alignItems:"center",
                      marginBottom:50
                  }}>
                     <CandidateComponent
                        uri={item.data?.imageDownloadUrl}
                       candidateName={item.data?.candidateName}
                       position={item.data?.candidatePostion}
                        />

                        <Button
                        variant="contained"
                        style={{backgroundColor:"green",color:"white"}}
                        >
                            <ThumbUpIcon style={{marginRight:5}} />
                            Vote
                        </Button>
                  </div>

              )}
              >

              </List>

          </div>
          
        </div>
    )
}

export default Homepage