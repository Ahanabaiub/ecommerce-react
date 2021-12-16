import React from 'react';
import {Link} from 'react-router-dom';


const Sidebar = ()=>{
    return(
        <div className="card bg-info w-25 vh-100 position-fixed">
            <h1 className="m-3">Admin Dashboard</h1>
            
        <hr className="dropdown-divider p-0" />
        <div className='' id="">
            <div>
                <Link className='nav-link text-dark' to="/products-dash">Products</Link>
            </div>
            <div>
                <Link className='nav-link text-dark' to="/orders-dash">Orders</Link>
            </div>
            <div>
                <Link className='nav-link text-dark' to="/managers-dash">Managers</Link>
            </div>
            <div>
                <Link className='nav-link text-dark' to="/managers-dash">Delivery Man</Link>
            </div>
            <div>
                <Link className='nav-link text-dark' to="/reports">Reports</Link>
            </div>
              {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className='nav-link text-dark' to="/products-dash">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link text-dark' to="/orders-dash">Orders</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link text-dark' to="/orders-dash">Orders</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link text-dark' to="/orders-dash">Orders</Link>
                        </li>
                       
                      
            </ul> */}
        </div>

        
    </div>
    );
}

export default Sidebar;