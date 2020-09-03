import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'

import RootRouting from './Routes/RootRoutes'
import AuthProvider from '../src/ContextProviders/UserAuthProvider'
import {firebaseAuth} from '../src/ContextProviders/UserAuthProvider'


const App=({})=>{
  return(
    <AuthProvider>
      <RootRouting />
    </AuthProvider>
  )
}

export default App;