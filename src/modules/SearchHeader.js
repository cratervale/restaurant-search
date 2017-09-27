import React, {Component} from 'react'
import {connect} from 'react-redux'
import {liveSearch, setLatLng} from '../reducers/search';


class SearchHeader extends Component{
  handleInputChange = (evt) => {
    const val = evt.target.value
    this.props.liveSearch(val)
  }


  componentDidMount(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.props.setLatLng);
      }
  }

  render(){
    const{currentSearch} = this.props
    return (
      <div className="search-header">
        <input type="text" className="search-header__input" value={currentSearch} onChange={this.handleInputChange} placeholder = "Search for Restaurants by Name, Cuisine, Location" />
      </div>
    )
  }
}

export default connect(
  (state) => ({currentSearch: state.search.currentSearch}),
  {liveSearch, setLatLng}
)(SearchHeader)
