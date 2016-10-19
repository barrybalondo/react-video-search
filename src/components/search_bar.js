import React from 'react';

const SearchBar = (props) => {
  
  return (
    <div className = "search-bar">
      <input 
        onChange = { event => props.onSearchTermChange( event.target.value ) }/>
    </div>
  );
};

export default SearchBar;
/*
import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props){
    super(props);

    this.state = { term: 'Starting Value' };
  }
  
  render() {

    return (
      <div className = "search-bar">
        <input 
          value = { this.state.term }
          onChange = { event => this.onInputChange( event.target.value ) }/>
      </div>
    );
  }

  onInputChange(term) {
    this.setState( { term });
    this.props.onSearchTermChange(term);
  }

}

export default SearchBar;
*/