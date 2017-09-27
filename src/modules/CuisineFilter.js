import React, {Component} from 'react'
import {connect} from 'react-redux'
import lodash from 'lodash'

const CuisineFilterItem = ({name, count}) => (
  <li className="search-results-list__list-item search-results-list__list-item">
    <span className="">{name}</span>
    <span className="">{count}</span>
  </li>
)

class CuisineFilter extends Component{

  render(){
    const {cuisineTypes} = this.props;
    console.log(cuisineTypes)
    return (
      <section className="search-results-master__cuisine">
        <h2 className="section-header">Cuisine/Food Type</h2>
        <ul className="search-results-list__list">
          {cuisineTypes.map(cuisine => (
            <CuisineFilterItem name={cuisine.name} count={cuisine.count}/>
          ))}
        </ul>
      </section>
    )
  }
}

export default connect(
  (state) => ({cuisineTypes : state.search.cuisineTypes}),
)(CuisineFilter)
