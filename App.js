import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



import './App.css';
import Dashboard from './components/dManager/pages/Dashboard';
import ManageDelivery from './components/dManager/pages/ManageDelivery';
import ManageDelivers from './components/dManager/pages/ManageDelivers';
import ManageReturnItems from './components/dManager/pages/ManageReturnItems';
import AssignDelivers from './components/dManager/pages/AssignDelivers';
import AddDelivers from './components/dManager/pages/AddDelivers';
/*import Navbar from './components/customer/Navbar';
import Home from './components/customer/pages/Home';
import Services from './components/customer/pages/Services';
import Products from './components/customer/pages/Products';
import SignUp from './components/customer/pages/SignUp';*/

function App() {
  return (
    <>
    <Router>
      {/*<Navbar/>*/}
      <Switch>
        {/*<Route path="/" exact component ={Home}/>
        <Route path="/services" component={Services}/>
        <Route path="/products" component={Products}/>
        <Route path="/sign-up" component={SignUp}/>*/}
          <Route path='/' exact component={Dashboard}/>
          <Route path='/ManageDelivery' component={ManageDelivery}/>
          <Route path='/ManageDelivers' component={ManageDelivers}/>
          <Route path='/AddDelivers' component={AddDelivers}/>
          <Route path='/ManageReturnItems' component={ManageReturnItems}/>
          <Route path='/AssignDelivers' component={AssignDelivers}/>

      </Switch>
    </Router>
    
   
	{/*<Router>
      <div className="app">
        <Switch>
          
          {<Route exact path="/login" component={LoginScreen} />}
           <Route exact path="/dashboard" component={DashboardScreen} />
           <Route exact path="/forgotpassword" component={ForgotPasswordScreen}/>
           <Route exact path="/passwordreset/:resetToken" component={ResetPasswordScreen} /> 

        </Switch>
      </div>
  </Router> */}
    </>
  );
}

export default App;


