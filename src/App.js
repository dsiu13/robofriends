import React from 'react';
import CardList from './components/cardList';
import Search from './components/search';
import Scroll from './components/scroll';
import ErrorBoundary from './components/ErrorBoundary';
import { connect } from 'react-redux';

import { setSearchField } from './actions/actions'

const mapStateToProps = state => {
  return {
    searchBox: state.searchBox
  }
};

const mapDispatchToProps  = (dispatch) => {
  return {
    searchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

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

  render() {
    const { robots } = this.state;
    const { searchBox, searchChange } = this.props;
    const filteredBots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchBox.toLowerCase());
    })

    return (
      <div className='tc'>
        <h1>RoboFriends</h1>
        <Search searchChange={ searchChange }/>
        <Scroll>
          <ErrorBoundary>
            <CardList robots={ filteredBots }/>
          </ErrorBoundary>
        </Scroll>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
