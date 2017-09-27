import React, {Component} from 'react'
import {connect} from 'react-redux'
import CuisineFilter from './CuisineFilter'
import PaymentOptionsFilter from './PaymentOptionsFilter'
import RatingFilter from './RatingFilter'
import RestaurantResultList from './RestaurantResultList'

export const FilterLink=({filter, children, filterFunction})=>{
    return (
      <a href='#'
        onClick={e => {
          e.preventDefault();
          filterFunction(filter);
        }}
      > {children} </a>
    )
  }
class MasterDetail extends Component{



  render(){
    const {restaurants} = this.props;
    console.log(restaurants)
    return (
      <article className="search-results__container">
        <section className="search-results-master__container">
          <CuisineFilter />
          <RatingFilter />
          <PaymentOptionsFilter />
        </section>
          <RestaurantResultList restaurants={this.restaurants} />
      </article>
    )
  }
}

export default connect(
  (state) => ({}),
)(MasterDetail)
