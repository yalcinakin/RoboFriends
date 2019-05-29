import React, {Component} from 'react';

import Header from '../Header/Header';
import CardList from '../CardList/CardList';
import SearchBox from '../SearchBox/SearchBox';
import Scroll from '../Scroll/Scroll';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';
import './MainPage.css';

class MainPage extends Component {

  componentDidMount(){
    this.props.onRequestRobots();
  }

  filterRobots = () => {
    return this.props.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
    })
  }

  render() {
    const { onSearchChange, isPending} = this.props;

    if (isPending){
      return <h1>Loading...</h1>
    }
    else{
      return (
        <div className= "tc">
          <Header />
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              <CardList robots={this.filterRobots()}/>
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  }
}

export default MainPage;
