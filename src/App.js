import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchHeader from './modules/SearchHeader'
import CuisineFilter from './modules/CuisineFilter'
import PaymentOptionsFilter from './modules/PaymentOptionsFilter'
import RatingFilter from './modules/RatingFilter'
import RestaurantResultList from './modules/RestaurantResultList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchHeader/>
        <article className="search-results__container">
          <section className="search-results-master__container">
            <CuisineFilter />
            {/* <RatingFilter /> */}
            <PaymentOptionsFilter />
          </section>
            <RestaurantResultList />
        </article>
      </div>
    );
  }
}

export default App;
