import React, { Component } from 'react';
import logo from './logo.svg';
import firebase from 'firebase';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import  Login from './routes/login';
import  Register  from './routes/register';
import  Dashboard  from './routes/dashboard';
import './App.css';

class App extends Component {
  constructor() {
    super();
    var config = {
      apiKey: "AIzaSyAtET7Ba9Sd-5UtYsA3KodpjTSP-WMoMqs",
      authDomain: "blood-bank-system-86b58.firebaseapp.com",
      databaseURL: "https://blood-bank-system-86b58.firebaseio.com",
      projectId: "blood-bank-system-86b58",
      storageBucket: "blood-bank-system-86b58.appspot.com",
      messagingSenderId: "342970809500"
    };
    firebase.initializeApp(config);
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(function(user) {
      if(user) {
        console.log('signed in')
      }
      else {
        console.log('please sign in')
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Router>
            <div>
              <Route exact path='/' component={Login} />
              <Route  path='/signup' component={Register} />
              <Route  path='/dashboard' component={Dashboard} />
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
