import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Card from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import firebase from 'firebase';
import DatePicker from 'material-ui/DatePicker';
import DropDownMenu from 'material-ui/DropDownMenu';
import '../Css/dashboard.css';

const styles = {
  customWidth: {
    width: 300,
  },
};


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange = (event, index, value) => this.setState({value});
  
  signout() {
    firebase.auth().signOut();
    this.props.history.push('/')
  }
  render() {
    return (
      <div className="App">
        <AppBar className="appbar" title="Blood Bank Systen" 
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        iconElementRight={<FlatButton label="Sign Out" onClick={this.signout.bind(this)}/>}
       />

<form>
          <paper style={{margin: "100px", textAlign: 'center', display: 'inline-block', padding: "3%"}} zDepth={5}>
            <Card className="card">
            <TextField hintText="Full Name" floatingLabelText="Full Name"
               className="email-in"/>
               <br />
   <TextField hintText="Address" floatingLabelText="Address" type="text"
               className="password-in"/>
              <br />
              <TextField hintText="Contact No" floatingLabelText="Contact No" type="text"
               className="password-in"/>
              <br />
              <DropDownMenu  value={this.state.value} onChange={this.handleChange}    style={styles.customWidth}>
          <MenuItem   value={1} primaryText="Never" />
          <MenuItem value={2} primaryText="Every Night" />
          <MenuItem value={3} primaryText="Weeknights" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" />
        </DropDownMenu>
              <br />
              <DatePicker  hintText="Date Of Birth" />
              <br />
              <RaisedButton label="Add"  primary={true}  />
              <RaisedButton  label="Donor View"   />
              </Card>
            </paper>

   </form>
      </div>

    );
  }
}

export default Dashboard;
