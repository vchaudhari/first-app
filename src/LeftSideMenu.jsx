import React from 'react';
import './App.css';
/**
 * App Left Menu Component
 */
class LeftSideMenu extends React.Component {
  render() {
    return(    
       <div className = "App-left-menu">
       <nav className="hidden-xs-down bg-faded sidebar">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact US</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About US</a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default LeftSideMenu;