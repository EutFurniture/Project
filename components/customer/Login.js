import React,{useState,Fragment} from 'react'
import {Link} from "react-router-dom";
//const { Component } = React
import './Form.css'
//import Footer from './Footer';
import Axios from'axios';

function Login (){

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    
    const login=()=>{
      Axios.post('http://localhost:3001/login',{
       
        email:email,
        password:password
       
    }).then((response) =>{
      console.log(response);
    });
    };
 

    return (
      <Fragment>
    <div class="container">
    <div class="contact-box ">
        <div class="left">
          <h3 id="make"> Make Your Home Feel Comfortable</h3>
        </div>
        <div class="right">
      <form >
      <h2>Welcome Back!</h2>
      <fieldset>
       
        <ul className="ulist">
          <li >
         
            <input type="email" id="email" placeholder="Phone/Email"  name="email" onChange={(e)=>{setEmail(e.target.value)}}
              required/>
          </li>
          <li>
            <input type="password" id="password" placeholder="Password"  name="password" onChange={(e)=>{setPassword(e.target.value)}} required/>
          </li>
          <li>
            <i/>
            <Link to="/resetpass" className="reset">Forgot Password?</Link>
          </li>
        </ul>
      </fieldset>
      <button onClick={login}>Login</button>
      <span id="signup">
          Don't have a Account? <Link to="/signup" id="reg">Register Now</Link>
      </span>
      
    </form>
   
    </div>
    </div>
    
    </div>
    
    </Fragment>
  );
}


export default Login