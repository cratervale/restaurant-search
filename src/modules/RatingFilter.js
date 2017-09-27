import React, {Component} from 'react'
import {connect} from 'react-redux'


  class RatingFilter extends Component{

    render(){
      const {currentTodo} = this.props;
      return (
        <section className="search-results-master__rating">
            <h2 className="section-header">Rating</h2>
            <ul className="search-results-list__list">
              <li className="search-results-list__list-item search-results-list__list-item">
                <span className="search-results-master__rating--star">
                  <img src="../img/star-empty.png"/>
                </span>
              </li>
            </ul>
          </section>
      )
    }
  }

  export default connect(
    (state) => ({}),
  )(RatingFilter)
