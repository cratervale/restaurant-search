import React, {Component} from 'react'
import {connect} from 'react-redux'
import {liveSearch} from '../reducers/search';


class SearchHeader extends Component{
  handleInputChange = (evt) => {
    const val = evt.target.value
    this.props.liveSearch(val)
  }

  render(){
    const{currentSearch} = this.props
    return (
      <form className="search-header">
        <input type="text" className="search-header__input" value={currentSearch} onChange={this.handleInputChange} placeholder = "Search for Restaurants by Name, Cuisine, Location" />
      </form>
    )
  }
}

export default connect(
  (state) => ({currentSearch: state.search.currentSearch}),
  {liveSearch}
)(SearchHeader)
