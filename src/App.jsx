import React, { Component } from 'react';
import './App.css';
import LeftSideMenu from './LeftSideMenu.jsx';
import UserEntryForm from './UserEntryForm.jsx';
import UserDetails from './UserDetails.jsx';

/**
 * App Component
 */
class App extends Component {
  constructor(props) {
      super(props);
      this.state = {formData:{first_name:'', last_name:'', phone:'', email:'', address:''}, formsData:[]};
      this.checkUserUpdate.bind(this);
      this.updateDetails.bind(this);
  }

  /**
   * CheckCall
   * @param  {[type]} test [description]
   * @return {[type]}      [description]
   */
  checkUserUpdate = (test) => {
    // console.log("Checking call back is working", test);
    this.setState({formData:{first_name:test.first_name, last_name:test.last_name}});
    this.updateDetails(test)
  }

  /**
   * controls the update user details action
   * @param  {[type]} test [description]
   * @return {[type]}      [description]
   */
  updateDetails = (test) => {
    this.state.formsData.push(test);
    this.setState({formsData: this.state.formsData});    
    // console.log("in update UserDetails", this.state.formsData);
  }

  /**
   * Render UI for User Application
   */
  render() {
    return (
      <div className="App">
        <div className="row">
          <header className="col-12 App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
        </div>
        <div className="row">
          <div className="col-2 col-sm-2 col-md-2">
            <LeftSideMenu />
          </div>
          <div className="col-10 col-sm-10 col-sm-10 right-container">
            <div className="row">
              <div className="col-3 col-sm-3 col-md-3">
                <UserEntryForm topDownData={this.state.formData.first_name 
              + ' ' +this.state.formData.last_name} bottomUpData={this.checkUserUpdate} />
              </div>          
              <div className="col-7 col-sm-7 col-md-7">
                <UserDetails topDownrows={this.state.formsData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
