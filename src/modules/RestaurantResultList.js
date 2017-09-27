import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getVisibleRestaurants, showMore} from '../reducers/search'

const Stars= ({stars_count}) =>{
  const y = 5.0;
  let z = Math.floor((stars_count/y)*100.0);
  z+="%";
  return(
    <div className="search-results-detail__list-item-details-rating--stars">
      <div className="star-ratings-sprite"><span style={{width:z}} className="star-ratings-sprite-rating"></span></div>
    </div>
)
}

const RestaurantListItem = ({name, image_url, stars_count, price_range, food_type, reviews_count, neighborhood})=>
  (
      <li className="search-results-detail__list-item">
        {/* <img src="http://via.placeholder.com/80x80"/> */}
        <img className="search-results-detail__list-item-image" src={image_url} width="80px" height="80px"/>
        <div className="search-results-detail__list-item-details">
          <div className="search-results-detail__list-item-details-header">{name}</div>
          <div className="search-results-detail__list-item-details-rating">
            <span className="search-results-detail__list-item-details-rating--rating">{stars_count}</span>

            <Stars stars_count={stars_count}/>

            <span className="search-results-detail__list-item-details-rating--reviews">({reviews_count} reviews)</span>
          </div>
          <div className="search-results-detail__list-item-details-cuisine">{food_type} | {neighborhood} | {price_range}</div>
        </div>
      </li>
  )

class RestaurantResultList extends Component{

  render(){
    const {nbHits, processingTimeMS, showMore} = this.props.results
    const visibleRestaurants = getVisibleRestaurants(this.props.results.hits, this.props.visibilityFilter)
    return (
      <section className="search-results-detail">
        {nbHits < 5000 && processingTimeMS &&
          <div className="search-results-detail__header">
              <span>{nbHits} results found in {processingTimeMS*.001} seconds</span>
          </div>
        }
          <ul className="search-results-detail__list">
            {visibleRestaurants.map((item) =>
              <RestaurantListItem
                key={item.objectID}
                {...item}
              />
            )}
          </ul>
          {/* {nbHits < 5000 && processingTimeMS &&
            <button onClick={this.props.showMore} className="search-results-detail__show-more-button">Show More</button>
          } */}
        </section>
    )
  }
}

export default connect(
  (state) => ({results: state.search.results, visibilityFilter: state.search.visibilityFilter}),
  {showMore}
)(RestaurantResultList)
