import React from 'react';
import FullName from './Component/Profile/FullName';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import Address from './Component/Profile/Address';
import './Component/Profile/ProfileCss.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Container">
        <ProfilePhoto />
        <FullName />
        <Address />
      </div>
    </div>
  );
}

export default App;
