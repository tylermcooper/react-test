import React from "react";
import { connect } from "react-redux";

class Navigation extends React.Component {
  
  render() {
    return (
      
      <nav>
        <ul>

          <li>
            <a href="#">Overview</a>
          </li>

          <li>
            <a href="#">Sales</a>
          </li>
          
        </ul>
    </nav>     

    );
  }
}

export default Navigation;