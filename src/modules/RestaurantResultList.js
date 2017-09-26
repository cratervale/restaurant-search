import React, {Component} from 'react'
import {connect} from 'react-redux'


class RestaurantResultList extends Component{

  render(){
    const {currentTodo} = this.props;
    return (
      <section className="search-results-detail">
          <div className="search-results-detail__header"></div>
          <ul className="search-results-detail__list">
            <li className="search-results-detail__list-item">
              <div className="search-results-detail__list-item-image">
                <img src="http://via.placeholder.com/80x80"/>
              </div>
              <div className="search-results-detail__list-item-details">
                <div className="search-results-detail__list-item-details-header">Anchor and Hope</div>
                <div className="search-results-detail__list-item-details-rating">
                  <span className="search-results-detail__list-item-details-rating--rating">4.2</span>
                  <span className="search-results-detail__list-item-details-rating--stars">*****</span>
                  <span className="search-results-detail__list-item-details-rating--reviews">(1897 reviews)</span>
                </div>
                <div className="search-results-detail__list-item-details-cuisine">American & Seafood | SOMA | $31 to $50</div>
              </div>
            </li>
          </ul>
          <button className="search-results-detail__show-more-button">Show More</button>
        </section>
    )
  }
}

export default connect(
  (state) => ({}),
)(RestaurantResultList)
