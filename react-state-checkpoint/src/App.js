import './App.css';
import React, { Component } from "react";
import profilePic from './ProfilePhoto.jpg'
import Profile from './Profile/Profile'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      fullName: 'Harrouche Amir',
      bio: 'https//:www.bio.com',
      profession: 'Developer',
      imgSrc: profilePic,
      shows: false
    };
  }

  clicked = () => 
    this.setState({
      shows: !this.state.shows
    });

  render() {
    let myProfile;
    if(this.state.shows) {
      myProfile = <Profile fullName={this.state.fullName} bio={this.state.bio} profession={this.state.profession} imgSrc={this.state.imgSrc} />
    }

    return (
      <div className="App">
        <div className="row">
          <div className="col-sm-4">
            <label>Click to show the Profile : </label>
          </div>
          <div className="col-sm-1">
            <button className="btn btn-success" onClick={this.clicked}>
              {this.state.shows ? "Hide" : "shows"}
            </button>
          </div>
        </div>
        <div className="row">
          {myProfile} 
        </div>
      </div>
    );
  }
}

export default App;
