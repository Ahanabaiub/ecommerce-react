import React from 'react';
import { Link } from 'react-router-dom';

const TopNav = ()=>{
    return(
        <div>
            <Link to="/">Home</Link>&nbsp;&nbsp;
            <Link to="/count">Count</Link>&nbsp;&nbsp;
            <Link to="/products">Products</Link>
        </div>
    );
}

export default TopNav;