import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setVisible} from '../reducers/search'
import {FilterLink} from './MasterDetail'

const PaymentOption = ({name, filterFunction}) =>(
  <FilterLink filter={name} filterFunction={filterFunction}>
    <li className="search-results-list__list-item search-results-list__list-item">
      <span className="">{name}</span>
    </li>
  </FilterLink>
)

  class PaymentOptionsFilter extends Component{


    render(){
      const paymentOptions = ['AMEX', 'Visa', 'Discover', 'MasterCard']
      const{setVisible} = this.props
      console.log(paymentOptions)
      return (
        <section className="search-results-master__payment">
          <h2 className="section-header">Payment Options</h2>
          <ul className="search-results-list__list">
            {paymentOptions.map(option => <PaymentOption filterFunction={setVisible} name={option}/>)}
          </ul>
        </section>
      )
    }
  }

  export default connect(
    (state) => ({}),
    {setVisible}
  )(PaymentOptionsFilter)
