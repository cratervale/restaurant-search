import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setVisible} from '../reducers/search'
import {FilterLink} from './MasterDetail'

const StarFilterItem = ({value, filterFunction})=> (
  <FilterLink filter={value} filterFunction={filterFunction}>
    <li className="search-results-list__list-item">
      <div className="star-ratings-sprite"><span style={{width: `${value*20}%`}} className="star-ratings-sprite-rating"></span></div>
    </li>
  </FilterLink>
)

  class RatingFilter extends Component{

    render(){
      const {currentTodo, setVisible} = this.props;
      const starMap = [1,2,3,4,5]
      return (
        <section className="search-results-master__rating">
            <h2 className="section-header">Rating</h2>
            <ul className="search-results-list__list">
              {
                starMap.map(value => (<StarFilterItem value={value} filterFunction={setVisible} />))
              }
            </ul>
          </section>
      )
    }
  }

  export default connect(
    (state) => ({}),
    {setVisible}
  )(RatingFilter)
