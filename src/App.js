import React from 'react';
import CardList from './components/cardList';
import Search from './components/search';
import Scroll from './components/scroll';
import ErrorBoundary from './components/ErrorBoundary';
import { connect } from 'react-redux';

import { setSearchField, requestRobots } from './actions/actions'

const mapStateToProps = state => {
  return {
    searchBox: state.searchBots.searchBox,
    robots: state.requestRobots.Robots,
    isPending: state.requestRobots,
    err: state.requestRobots
  }
};

const mapDispatchToProps  = (dispatch) => {
  return {
    searchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => requestRobots(dispatch)
  }
}

class App extends React.Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchBox, searchChange, robots, isPending } = this.props;
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
