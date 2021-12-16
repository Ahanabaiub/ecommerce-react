import React from 'react';
import Count from './Components/Counter';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import TopNav from './Components/TopNav';
import Homepg from './Components/Homepg';
import Counter from './Components/Counter';
import Products from './Components/Products';
import Follow from './Components/Follow';
import Navbar from './Components/Navbar';
import ProductsDash from './Components/ProductsDash';
import OrderDash from './Components/OrdersDash';
import ManagersDash from './Components/ManagersDash';
import Reports from './Components/Reports';
import ProductDetails from './Components/ProductDetails';


const AppHome=()=>{
    return(
      
       <div>
        
           <Router>
                <Navbar />
               <Switch>
                   
                    <Route exact path='/'>
                        <Homepg/>
                    </Route>
                    <Route path='/orders-dash'>
                        <OrderDash />
                    </Route>
                    <Route  path='/products-dash'>
                        <ProductsDash/>
                    </Route>
                    <Route  path='/managers-dash'>
                        <ManagersDash/>
                    </Route>
                    <Route  path='/reports'>
                        <Reports/>
                    </Route>



                    <Route  path='/product/details/:id'>
                        <ProductDetails />
                    </Route>
                    
                
               </Switch>
           </Router>
       </div>
    );
}

export default AppHome;