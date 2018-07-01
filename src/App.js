import React from 'react';
import CardList from './components/cardList';
import Search from './components/search';
import { robots } from './robots';

class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      robots: robots,
      searchBox: ' ',
    }
  }

searchHandler = (event) => {
  this.setState({ searchBox: event.target.value })
  console.log(event.target.value)

}

  render() {
    const { robots, searchBox } = this.state;
    const filteredBots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchBox.toLowerCase());
    })

    console.log(filteredBots)

    return (
      <div className='tc'>
        <h1>RoboFriends</h1>
        <Search searchChange={this.searchHandler}/>
        <CardList robots={ filteredBots }/>
      </div>
    );
  }
}

export default App;
