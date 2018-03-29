import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import SearchText from './Components/SearchText'
import TopBar from './Components/TopBar'

import { Container } from 'reactstrap'

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state={};
  // }
  
  render() {
    return (
      <div>
        <TopBar/>
        <Container fluid={true}>
        
          <SearchText/>
      
        </Container>
      </div>
    );
  }
}

export default App;
