import React from 'react';
import {BrowserRouter as Router, Route,Link, Switch, useRouteMatch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import BarChart from './BarChart';
import Sidebar from './Sidebar';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const Homepg = ()=>{
    let {path,url} = useRouteMatch();

    let history = useHistory();

    const [orderChartData,setOrderChartData] = useState([]);
    const [orderCatChartData,setOrderCatChartData] = useState([]);  
    
    const [totalProduct,setTotalProduct] = useState(0);
    const [totalCustomers,setTotalCustomers] = useState(0);
    const [totalOrders,setTotalOrders] = useState(0);
    const [totalManagers,setTotalManagers] = useState(0);
    const [totalDMans,setTotalDMans] = useState(0);
    const [totalCategory,setTotalCategory] = useState(0);

    const monthly_OrderChart_Label = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug',
    'Sep','Oct','Nov','Dec'];


    useEffect(()=>{

       
        if(!localStorage.getItem('user')){
        
            history.push('/login');
        
        }

       

        axios.get('api/product/countAll').then(resp=>{
            setTotalProduct(resp.data);
        })
        .catch(err=>{
            console.log(err);
        });

        axios.get('api/manager/allCount').then(resp=>{
            setTotalManagers(resp.data);
        })
        .catch(err=>{
            console.log(err);
        });

        axios.get('api/customer/allCount').then(resp=>{
            setTotalCustomers(resp.data);
        })
        .catch(err=>{
            console.log(err);
        });

        axios.get('api/order/allCount').then(resp=>{
            setTotalOrders(resp.data);
        })
        .catch(err=>{
            console.log(err);
        });

        axios.get('api/deliveryMan/allCount').then(resp=>{
            setTotalDMans(resp.data);
        })
        .catch(err=>{
            console.log(err);
        });

        axios.get('api/category/allCount').then(resp=>{
            setTotalCategory(resp.data);
        })
        .catch(err=>{
            console.log(err);
        });


        axios.get('api/order/get-monthly-data').then(resp=>{
            setOrderChartData(resp.data);
        })
        .catch(err=>{
            console.log(err);
        });

        axios.get('api/order/get-category-data').then(resp=>{
            setOrderCatChartData(resp.data);
        })
        .catch(err=>{
            console.log(err);
        });

       

    },[]);

    
    

    return (
       <>
           <div className="mt-5">
                <Sidebar />

                <div className="w-75 ms-auto">
                    <div className="container p-3" >
                        <div className="row text-white">
                                <div className=" col-sm-4 card p-3 m-1 bg-primary shadow text-light">
                                    <p>Products</p>
                                    <span className="fs-3">{totalProduct}</span>
                                </div>
                                <div className=" col-sm-4 card p-3 m-1  bg-warning shadow">
                                    <p>Customers</p>
                                    <span className="fs-3">{totalCustomers}</span>
                                </div>
                                <div className=" col-sm-3 card p-3 m-1 bg-info shadow">
                                    <p>Orders</p>
                                    <span className="fs-3">{totalOrders}</span>
                                </div>
                                <div className=" col-sm-4 card p-3 m-1 bg-success shadow">
                                    <p>Managers</p>
                                    <span className="fs-3">{totalManagers}</span>
                                </div>
                                <div className=" col-sm-4 card p-3 m-1 bg-danger shadow">
                                    <p>Delivery Mans</p>
                                    <span className="fs-3">{totalDMans}</span>
                                </div>
                                <div className=" col-sm-3 card p-3 m-1 bg-dark shadow">
                                    <p>Categories</p>
                                    <span className="fs-3">{totalCategory}</span>
                                </div>
                            
                            
                        </div>
                        <div className="mt-3">
                            <BarChart title='Monthly Orders' color='#81c784' label='Orders' 
                            data={orderChartData} labels={monthly_OrderChart_Label} />
                        </div>
                        <div className="mt-3">
                            <BarChart title='Category wise Order Chart' color='#ffcc80' label='Orders-Category' 
                            data={Object.values(orderCatChartData)} labels={Object.getOwnPropertyNames(orderCatChartData)} />
                        </div>
                        
                       
                   </div>
                </div>
           </div>
       </>
        // <>
        //     <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
        //         <div className="offcanvas-header">
        //             <h5 className="offcanvas-title" id="offcanvasLabel">Offcanvas</h5>
        //             <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        //         </div>
        //         <div className="offcanvas-body">
        //             Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
        //         </div>
        //     </div>
        // </>
    );
}

export default Homepg;