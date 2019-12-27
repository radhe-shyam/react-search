import React, { Component } from 'react';
import './App.css';
import History from './History/History';
import SearchBox from './SearchBox/SearchBox';
import SearchDetails from './SearchDetails/SearchDetails';

class App extends Component {
  constructor(props) {
    super(props);
    const list = [{
      keyword: "tesla",
      result: "tesla electric car maker"
    }, {
      keyword: "cybertruck",
      result: "An electric pickup truck by tesla"
    }];
    this.state = {
      searchList: list,
      selectedSearch: list[0]
    };
  }
  addSearchList(search) {
    this.setState({ searchList: [...this.state.searchList, search] });
  }
  selectSearch(searchObject) {
    this.setState({ selectedSearch: searchObject });
  }
  render() {
    return (
      <div className="container">
        <h1>Wiki Search</h1>
        <div className="flex-row">
          <div className="flex-large">
            <SearchBox addSearch={this.addSearchList.bind(this)} />
            <SearchDetails data={this.state.selectedSearch} />

          </div>
          <div className="flex-large">
            <History list={this.state.searchList} selected={this.state.selectedSearch} selectSearch={this.selectSearch.bind(this)} />
          </div>
        </div>
      </div>
    );
  };
}

export default App;
