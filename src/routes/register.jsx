import React, { Component } from 'react';
import firebase from 'firebase';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import '../Css/register.css';
import Card from 'material-ui/Card'

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      username: '',
      password: ''
    }
  }

  signin() {
    this.props.history.push("/")
  }
  signup(e) {
    e.preventDefault(e);
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then((user) => {
      this.props.history.push("/")
      firebase.database().ref('User/').child(user.uid).set({Username: this.state.username, Email: this.state.email, Password: this.state.password, Uid: user.uid})

    })
    .catch(
      (error) => alert(error)
    )
  }
  render() {
    return (
     <div>
      <AppBar className="appbar" title="Blood Bank System" 
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        iconElementRight={<FlatButton label="Sign In" onClick={this.signin.bind(this)}/>}
       />
       <form onSubmit={this.signup.bind(this)}>
          <paper style={{margin: "100px", textAlign: 'center', display: 'inline-block', padding: "3%"}} zDepth={5}>
         
          <TextField hintText="John Doe" floatingLabelText="User Name"
              onChange={(val) => {this.setState({username: val.target.value})}} className="username-in"/>
  <br />
            <TextField hintText="someone@example.com" floatingLabelText="E-Mail"
              onChange={(val) => {this.setState({email: val.target.value})}} className="email-in"/>
               <br />
   <TextField hintText="Password Field" floatingLabelText="Password" type="password"
              onChange={(val) => {this.setState({password: val.target.value})}} className="password-in"/>
              <br />
              <RaisedButton label="Sign Up"  primary={true} onClick={this.signup.bind(this)} />
            </paper>
       </form>
      </div>
    );
  }
}

export default Register;