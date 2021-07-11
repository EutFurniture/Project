import React,{Component, Fragment} from 'react'
import {Link} from "react-router-dom";
//const { Component } = React
import './Form.css'

class Resetpass extends Component {
    render(){
     return (
       <Fragment>
      <div class="container">
       <div class="contact-box ">
        <div class="left"><h3 id="make"> Make Your Home Feel Comfortable</h3></div>
        <div class="right">
      <form>
       <h2>Reset Password</h2>
     <fieldset>
     
      <ul className="ulist">
                <h5> Enter your user account's verified email address and we will send you a password reset link.</h5>
              <li>
                  <input type="email" id="email" placeholder="Email" required/>
                </li>
                
      </ul>
    </fieldset>
    <button> Reset Password</button>
    <button type="button" ><Link to="/login" id="ref">Go Back</Link></button>
    

  </form>
  </div>
  </div>
  
  </div>

  </Fragment>
  );
}
}
export default Resetpass