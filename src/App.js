import React, { Component } from 'react';
import CardList from './components/cardList';
import Search from './components/search';
import { robots } from './robots';

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      robots: robots,
      searchfield: ''
    }
  }

  render( robots ) {
    return (
      <div className='tc'>
        <h1>RoboFriends</h1>
        <Search />
        <CardList robots={robots}/>
      </div>
    );
  }
}

export default App;
