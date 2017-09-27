import React, { Component } from 'react';
import './App.css';
import SearchHeader from './modules/SearchHeader'
import MasterDetail from './modules/MasterDetail'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-Container">  
          <SearchHeader/>
          <MasterDetail/>
        </div>
      </div>
    );
  }
}

export default App;
