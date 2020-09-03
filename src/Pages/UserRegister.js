// add useContext
import React, {useContext} from 'react';
import {firebaseAuth} from '../ContextProviders/UserAuthProvider'

const Signup = () => {
    const {handleSignup, inputs, setInputs,errors} = useContext(firebaseAuth)

    const handleSubmit = (e) => {
        e.preventDefault()
        handleSignup()
    
      }
      const handleChange = e => {
        const {name, value} = e.target
        console.log(inputs)
        setInputs(prev => ({...prev, [name]: value}))
      }


  return (
    <form onSubmit={handleSubmit}>
      {/* replace the div tags with a form tag */}
      Signup
      {/* make inputs  */}
      <input onChange={handleChange} name="email" placeholder='email' value={inputs.email} />
      <input onChange={handleChange} name="password" placeholder='password' value={inputs.password} />
      <button>signup</button>
      {/* {errors.length > 0 ? errors.map(error => <p style={{color: 'red'}}>{error}</p> ) : null} */}
    </form>
  );
};

export default Signup;