import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import SearchText from './Components/SearchText'

import 'reactstrap'

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state={};
  // }
  
  render() {
    return (
      
      <div>
        
        <SearchText/>
      
      </div>
    );
  }
}

export default App;
