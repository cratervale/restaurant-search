import React, {Component} from 'react'
import {connect} from 'react-redux'


class SearchHeader extends Component{
  render(){
    return (
      <form className="search-header">
        <input type="text" className="search-header__input" placeholder = "Search for Restaurants by Name, Cuisine, Location" />
      </form>
    )
  }
}

export default connect(
  (state) => ({}),
)(SearchHeader)
