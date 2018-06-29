import React, { Component } from 'react';
import Card from './components/card'
import { robots } from './robots.js'

class App extends Component {
  render() {
    return (
      <div>
        <Card id={robots[0].id} name={robots[0].name}/>
        <Card id={robots[1].id} name={robots[1].name}/>
        <Card id={robots[2].id} name={robots[2].name}/>
      </div>
    );
  }
}

export default App;
