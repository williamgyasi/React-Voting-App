import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from '../Firebase/firebase'
import { Link } from 'react-router-dom';

//Components
import Candidate from '../Components/CandidateComponent'

class Admin extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('boards');
    this.state = {
      title: '',
      description: '',
      author: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title, description, author } = this.state;

    this.ref.add({
      title,
      description,
      author
    }).then((docRef) => {
      this.setState({
        title: '',
        description: '',
        author: ''
      });
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    const { title, description, author } = this.state;
    return (
      <div class="container">
        <Candidate>
            
        </Candidate>
      </div>
    );
  }
}

export default Admin;