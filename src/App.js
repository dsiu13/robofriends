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

searchHandler = (event) => {
  this.setState({ searchfield: event.target.value })
}

  render() {
    const filteredBots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    return (
      <div className='tc'>
        <h1>RoboFriends</h1>
        <Search searchChange={this.searchHandler}/>
        <CardList robots={filteredBots}/>
      </div>
    );
  }
}

export default App;
