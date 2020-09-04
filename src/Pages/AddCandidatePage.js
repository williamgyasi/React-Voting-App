import React,{useContext,useState} from 'react'
import clsx from 'clsx';
import AdminHeaderBar from '../Components/AdminHeaderBar'
import {firebaseAuth} from '../ContextProviders/UserAuthProvider';
import { green } from '@material-ui/core/colors';
import {Container,Button,Typography,CircularProgress,Box} from '@material-ui/core'
import {Skeleton} from '@material-ui/lab'
import InputHolder from '../Components/InputHolder'
import {storageMethods} from '../Firebase/storageMethods'
import {firestoreMethods} from '../Firebase/firestoreMethods'

import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';
import SendIcon from '@material-ui/icons/Send';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing(1),
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

const AddCandidate =()=>{
  const[image,setImage] =useState(null)
  const[imageURL,setImageURL]=useState('')
  const [candidateName,setCandidateName]=useState('')
  const [candidatePostion,setCandidatePosition]=useState('')
  const [votes,setVotes]=useState(0)
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();
    document.title="ADMIN PAGE"
    const{email} = useContext(firebaseAuth).admin
    const{handleSignOut} = useContext(firebaseAuth)


    const buttonClassname = clsx({
      [classes.buttonSuccess]: success,
    });
  
    React.useEffect(() => {
      return () => {
        clearTimeout(timer.current);
      };
    }, []);
  
    const handleButtonClick = async () => {
        await storageMethods.storeImage(imageURL,candidateName)
        .on('state_changed',
        (snapshot)=>{

        },
        (error)=>{

        },
        async()=>{
          const imageDownloadUrl=await storageMethods.getImageDownloadURL(candidateName)
          console.log(imageDownloadUrl)
          if(imageDownloadUrl){
            const candidatePayload={
              candidateName,
              candidatePostion,
              imageDownloadUrl,
              votes
            }
            firestoreMethods.addCandidate(candidatePayload)
          }
        })
      
      if (!loading) {
        setSuccess(false);
        setLoading(true);
        timer.current = setTimeout(() => {
          setSuccess(true);
          setLoading(false);
        }, 2000);
      }
    };

    const textChange=(event)=>{
      if(event.target.name==="name"){
        setCandidateName(event.target.value)
      }
      else{
        setCandidatePosition(event.target.value)
      }
      
      
    }

    const handleChange=(event)=>{
      setImage(URL.createObjectURL(event.target.files[0]))
      setImageURL(event.target.files[0])

    }

    return(
        <div>
          <AdminHeaderBar email={email} handleSignOut={handleSignOut} />
          <Container style={{
            marginTop:20,
            width:500

          }}>
            <InputHolder onInputChange={textChange} name={"name"} type={"text"} inputText={"Candidate Full Name"} />

            <InputHolder onInputChange={textChange} name={"position"} type={"text"} inputText={"Aspiring Position"}  />

            <div style={{
              display:"flex",
              flexDirection:"row",
              alignItems:"center",
              justifyContent:"space-between"
            }}>
              <input
        accept="image/*"
        style={{display:"none"}}
        onChange={handleChange}
        id="contained-button-file"
        multiple
        type="file"
      />
      <Box width={210} marginRight={1} my={5}>
        {
          image?(
            <img style={{width:"100%",height:200}} alt="Candidate Image" src={image}/>
          )
          :
          (<Skeleton variant="rect" animation="wave" width={210} height={200} /> )

        }

      </Box>

      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>
            </div>

            <div className={classes.wrapper}>
        <Button
          variant="contained"
          style={{backgroundColor:"green",color:"white",marginLeft:10}}
          className={buttonClassname}
          disabled={loading}
          onClick={handleButtonClick}
        >
          {success ? <CheckIcon style={{marginRight:10}} /> : <SendIcon style={{marginRight:10}} />}
          Submit
        </Button>
      </div>
      





          </Container>
        </div>
    )
}

export default AddCandidate