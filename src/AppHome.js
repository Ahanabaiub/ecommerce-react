import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Homepg from './Components/Homepg';
import Navbar from './Components/Navbar';
import ProductsDash from './Components/ProductsDash';
import OrderDash from './Components/OrdersDash';
import ManagersDash from './Components/ManagersDash';
import Reports from './Components/Reports';
import ProductDetails from './Components/ProductDetails';
import Login from './Components/Login';
import Logout from './Components/Logout';
import axios from 'axios';


//localStorage.removeItem('user'); when user will logout
var token=null;
if(localStorage.getItem('user')){
  var obj = JSON.parse(localStorage.getItem('user'));
  token = obj.access_token;
}
axios.defaults.baseURL="http://localhost:8000/";
axios.defaults.headers.common["Authorization"] = token;


const AppHome=()=>{
    return(
      
       <div>
        
           <Router>
           
               <Switch>
                    <Route exact path='/'>
                        <Login />
                    </Route>
                    
                    <Route path='/home'>
                        <Navbar />
                        <Homepg/>
                    </Route>
                    <Route path='/orders-dash'>
                        <Navbar />
                        <OrderDash />
                    </Route>
                    <Route  path='/products-dash'>
                        <Navbar />
                        <ProductsDash/>
                    </Route>
                    <Route  path='/managers-dash'>
                        <Navbar />
                        <ManagersDash/>
                    </Route>
                    <Route  path='/reports'>
                        <Navbar />
                        <Reports/>
                    </Route>



                    <Route  path='/product/details/:id'>
                        <Navbar />
                        <ProductDetails />
                    </Route>

                    <Route  path='/logout'>
                        <Logout/>
                    </Route>
                    
                    <Redirect to="/"/>
                
               </Switch>
           </Router>
       </div>
    );
}

export default AppHome;