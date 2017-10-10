import React from 'react';
import './App.css';

class UserEntryForm extends React.Component {
  submitDetails (){
    var dataIn = {
                    first_name : document.getElementById("first_name").value, last_name : document.getElementById("last_name").value,
                    phone : document.getElementById("phone").value, email : document.getElementById("email").value,
                    address : document.getElementById("address").value
                  }
    // console.log("Test data ++ ", dataIn );
    this.props.bottomUpData(dataIn);
  }


  render() {    
    return(    
       <div className = "form-group  text-left">        
        <label className="col-12 text-left">First Name: </label>
        <input className="form-control" type="text" id="first_name" name="first name" placeholder="First Name" value={this.props.first_name}/><br />
        <label className="col-12 text-left">Last Name:</label>
        <input className="form-control" type="text"  id="last_name" name="last name" placeholder="Last Name"  value = {this.props.last_name}/><br />
        <label className="col-12 text-left">Phone Number:</label>
        <input className="form-control" type="number"  id="phone" name="phone number" placeholder="Phone" value = {this.props.phone}/><br />
        <label className="col-12 text-left">Email:</label>
        <input className="form-control" type="email"  id="email" name="email" placeholder="Email" value = {this.props.email}/><br />
        <label className="col-12 text-left">Address:</label>
        <textarea className="form-control" id="address" name="Address" placeholder="Address" value = {this.props.address}/><br />
        <button className="btn btn-primary btn-lg" onClick={()=>this.submitDetails()}>Submit</button>
      </div>
    )
  }
}

export default UserEntryForm;
