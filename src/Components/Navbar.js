import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ()=>{

    const[username,setUserName]=useState('');

    

    useEffect(async()=>{

        let uid=null;
        if(localStorage.getItem('user')){
        var obj = JSON.parse(localStorage.getItem('user'));
        uid = obj.user_id;
        console.log("uid: "+obj);
        }
    
        
        let resp =await axios.get('/api/uname/'+uid);
        setUserName(resp.data);
        // console.log(resp.data);
    },[]);



    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContentSideBar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                </button> */}
                    <a className="navbar-brand text-uppercase h1 mt-1" href="#">Bestbuy</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                       
                      
                    </ul>
                    <div>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">{username}</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/logout">Logout</Link>
                        </li>
        
                    </ul>
                    </div>
                   
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;