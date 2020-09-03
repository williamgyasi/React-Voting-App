import React,{useContext,useState} from 'react'
import AdminHeaderBar from '../Components/AdminHeaderBar'
import {firebaseAuth} from '../ContextProviders/UserAuthProvider';
import { green } from '@material-ui/core/colors';
import {Container,Button,Typography,CircularProgress,Box} from '@material-ui/core'
import {Skeleton} from '@material-ui/lab'
import InputHolder from '../Components/InputHolder'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    display:"flex",
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
  const [candidateName,setCandidateName]=useState('')
  const [candidatePostion,setCandidatePosition]=useState('')
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();
    document.title="ADMIN PAGE"
    const{email} = useContext(firebaseAuth).admin
    const{handleSignOut} = useContext(firebaseAuth)


    // const buttonClassname = clsx({
    //   [classes.buttonSuccess]: success,
    // });
  
    React.useEffect(() => {
      return () => {
        clearTimeout(timer.current);
      };
    }, []);
  
    const handleButtonClick = () => {
      const passsToDatabase={
        candidateName,
        candidatePostion,
        image
      }
      // if (!loading) {
      //   setSuccess(false);
      //   setLoading(true);
      //   timer.current = setTimeout(() => {
      //     setSuccess(true);
      //     setLoading(false);
      //   }, 2000);
      // }
    };

    const textChange=(event)=>{
      if(event.target.name==="name"){
        setCandidateName(event.target.value)

        console.log(candidateName)
      }
      else{
        setCandidatePosition(event.target.value)

      }
      
      
    }

    const handleChange=(event)=>{
      setImage(URL.createObjectURL(event.target.files[0]))
    }

    return(
        <div>
          <AdminHeaderBar email={email} handleSignOut={handleSignOut} />
          <Container style={{
            marginTop:20,
            width:500

          }}>
            <InputHolder onInputChange={textChange} name={"name"} type={"text"} inputText={"Candidate Full Name"} />

            <InputHolder onInputChange={textChange} name={"position"} type={"text"} inputText={"Aspiring Position"} autoComplete={true} />

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

          style={{backgroundColor:"green",color:"white",margin:"auto"}}
          // className={buttonClassname}
          disabled={loading}
          onClick={handleButtonClick}
        >
          Submit
        </Button>
        {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
      </div>





          </Container>
        </div>
    )
}

export default AddCandidate