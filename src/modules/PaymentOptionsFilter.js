import React, {Component} from 'react'
import {connect} from 'react-redux'

const PaymentOption = ({name}) =>(
  <li className="search-results-list__list-item search-results-list__list-item">
    <span className="">{name}</span>
  </li>
)

  class PaymentOptionsFilter extends Component{


    render(){
      const paymentOptions = ['AMEX/American Express', 'Visa', 'Discover', 'MasterCard']
      console.log(paymentOptions)
      return (
        <section className="search-results-master__payment">
          <h2 className="section-header">Payment Options</h2>
          <ul className="search-results-list__list">
            {paymentOptions.map(option => <PaymentOption name={option}/>)}
          </ul>
        </section>
      )
    }
  }

  export default connect(
    (state) => ({}),
  )(PaymentOptionsFilter)
