import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="search-header">
          <input type="text" className="search-header__input" placeholder = "Search for Restaurants by Name, Cuisine, Location" />
        </div>
        <article className="search-results__container">
          <section className="search-results-master__container">
            <section className="search-results-master__cuisine">
              <h2 className="section-header">Cuisine/Food Type</h2>
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

          <section className="search-results-master__rating">
              <h2 className="section-header">Rating</h2>
              <ul className="search-results-list__list">
                <li className="search-results-list__list-item search-results-list__list-item-selected">
                  <span className="search-results-master__rating--star">
                    <img src="../img/star-empty.png"/>
                  </span>
                </li>
              </ul>
            </section>

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
          </section>

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
        </article>
      </div>
    );
  }
}

export default App;
