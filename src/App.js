import React, { Component } from 'react';
import Card from './components/card'
import { robots } from './robots.js'
import CardList from './components/cardList';

class App extends Component {
  render() {
    return (
      <div>
        <CardList />
      </div>
    );
  }
}

export default App;
