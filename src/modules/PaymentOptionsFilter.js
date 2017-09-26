import React, {Component} from 'react'
import {connect} from 'react-redux'


  class PaymentOptionsFilter extends Component{

    render(){
      const {currentTodo} = this.props;
      return (
        <section className="search-results-master__payment">
          <h2 className="section-header">Payment Options</h2>
          <ul className="search-results-list__list">
            <li className="search-results-list__list-item search-results-list__list-item-selected">
              <span className="">Italian</span>
              <span className="">70</span>
            </li>
            <li className="search-results-list__list-item">
              <span className="">Italian</span>
              <span className="">70</span>
            </li>
            <li className="search-results-list__list-item">
              <span className="">Italian</span>
              <span className="">70</span>
            </li>
          </ul>
        </section>
      )
    }
  }

  export default connect(
    (state) => ({}),
  )(PaymentOptionsFilter)
