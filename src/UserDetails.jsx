import React from 'react';
import './App.css';

class UserDetails extends React.Component {
  render(){
    // console.log("in appdetails: ",this.props.topDownrows);
    // Check userlist status.
    if(this.props.topDownrows){
      var userlist = this.props.topDownrows;
      if(userlist.length > 0){
        // Table Header
        var dataColumns = [{'first_name': 'First Name', 'last_name':'Last Name','phone':'Phone','email':'Email','address':'Address'}];  
        // Table Row Data
        var dataRows = userlist;
        // Render Header      
        var tableHeader= dataColumns.map(function(column,index) {
          return (
            <tr key={index}>
              <th>{column.first_name}</th><th>{column.last_name}</th>
              <th>{column.phone}</th><th>{column.email}</th>
              <th>{column.address}</th>
            </tr>
            )
          })
        // Render Table body
        var tableBody = dataRows.map(function(row,index) {
          return (
                  <tr key={index}>
                    <td>{row.first_name ? row.first_name: '-'}</td>
                    <td>{row.last_name ? row.last_name: '-'}</td>
                    <td>{row.phone ? row.phone: '-'}</td>
                    <td>{row.email ? row.email: '-'}</td>
                    <td>{row.address ? row.address: '-'}</td>
                  </tr>
                  ) 
        });
      }
    }
    // Decorate with Bootstrap CSS
    return (
      <table className="table table-bordered table-hover" width="100%">
        <thead>
          {tableHeader}
        </thead>
        <tbody>
          {tableBody}
        </tbody>
      </table>
    );
  }
};

export default UserDetails;
