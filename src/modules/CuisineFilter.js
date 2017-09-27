import React, {Component} from 'react'
import {connect} from 'react-redux'
import lodash from 'lodash'
import {setVisible} from '../reducers/search'
import {FilterLink} from './MasterDetail'

const CuisineFilterItem = ({name, count, filterFunction}) => (
  <FilterLink filter={name} filterFunction={filterFunction}>
    <li  className="search-results-list__list-item">
      <span className="">{name}</span>
      <span className="">{count}</span>
    </li>
  </FilterLink>
)

class CuisineFilter extends Component{

  render(){
    const {cuisineTypes, setVisible} = this.props;
    return (
      <section className="search-results-master__cuisine">
        <h2 className="section-header">Cuisine/Food Type</h2>
        <ul className="search-results-list__list">
          {cuisineTypes.map(cuisine => (
            <CuisineFilterItem filterFunction={setVisible} name={cuisine.name} count={cuisine.count}/>
          ))}
        </ul>
      </section>
    )
  }
}

export default connect(
  (state) => ({cuisineTypes : state.search.cuisineTypes}),
  {setVisible}
)(CuisineFilter)
