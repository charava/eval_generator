import './App.css';
import Eleventh_Fall_Eval_Page from './pages/Fall_11_page.js';
import Eleventh_Spring_Eval_Page from './pages/Spring_11_page';
import Ninth_Fall_Eval_Page from './pages/Fall_9_page';
import Ninth_Spring_Eval_Page from './pages/Spring_9_page';

import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 'Fall 9th Grade', // Set the initial page to 'fall'
    };
  }

  // Function to switch between pages
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  }

  render() {
    const { currentPage } = this.state;

    return (
      <div>
        {/* Navigation bar */}
        <nav>
          <h1>Eval Generator</h1>

          <ul>
            <li
              className={currentPage === 'Fall 9th Grade' ? 'active' : ''}
              onClick={() => this.handlePageChange('Fall 9th Grade')}
            >
              Fall 9th
            </li>
            <li
              className={currentPage === 'Spring 9th Grade' ? 'active' : ''}
              onClick={() => this.handlePageChange('Spring 9th Grade')}
            >
              Spring 9th
            </li>
            <li
              className={currentPage === 'Fall 11th Grade' ? 'active' : ''}
              onClick={() => this.handlePageChange('Fall 11th Grade')}
            >
              Fall 11th
            </li>
            <li
              className={currentPage === 'Spring 11th Grade' ? 'active' : ''}
              onClick={() => this.handlePageChange('Spring 11th Grade')}
            >
              Spring 11th
            </li>
          </ul>
        </nav>

        {/* Render the selected page */}
        {currentPage === 'Fall 9th Grade' ? <Ninth_Fall_Eval_Page /> : null}
        {currentPage === 'Spring 9th Grade' ? <Ninth_Spring_Eval_Page /> : null}
        {currentPage === 'Fall 11th Grade' ? <Eleventh_Fall_Eval_Page /> : null}
        {currentPage === 'Spring 11th Grade' ? <Eleventh_Spring_Eval_Page /> : null}
        
      </div>
    );
  }
}

export default App;