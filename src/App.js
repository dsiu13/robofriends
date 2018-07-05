import React from 'react';
import CardList from './components/cardList';
import Search from './components/search';
import Scroll from './components/scroll';
import ErrorBoundary from './components/ErrorBoundary';

class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      robots: [],
      searchBox: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({ robots: users }));
  }

searchHandler = (event) => {
  this.setState({ searchBox: event.target.value })
}

  render() {
    const { robots, searchBox } = this.state;
    const filteredBots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchBox.toLowerCase());
    })

    return (
      <div className='tc'>
        <h1>RoboFriends</h1>
        <Search searchChange={this.searchHandler}/>
        <Scroll>
          <ErrorBoundary>
            <CardList robots={ filteredBots }/>
          </ErrorBoundary>
        </Scroll>

      </div>
    );
  }
}

export default App;
