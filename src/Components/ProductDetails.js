import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Sidebar from './Sidebar';



const ProductDetails = (props)=>{

    const {id} = useParams('id');

    const[product,setProduct]=useState([]);

    useEffect(async ()=>{

        const resp =await axios.get('http://localhost:8000/api/product/get/'+id);
        //console.log(resp.data);

        setProduct(resp.data);
        

    },[]);

    return(
        <>
                <div className='mt-5'>
                    <Sidebar />
                    <div className='w-75 ms-auto'>
                        <div className='container p-3'>
                                <div className='d-flex  bg-light p-3 my-3'>
                                     <img src={product.image} className=' p-2' style={{width: '13rem', height: '13.5rem'}}/>
                                     <h1 className='ms-5 '>{product.name}</h1>
                                     
                                </div>
                                <div className='d-flex my-2'>
                                    <p className='bg-light p-4 me-3'>Created: {product.created_at}</p>
                                    <p className='bg-light p-4'>Last Update: {product.updated_at}</p>
                                </div>
                                <div className='d-flex my-2'>
                                    <h3 className='bg-light p-4 me-3'>Price : {product.unitPrice} TK</h3>
                                    <h3 className='bg-light p-4'>Quantity: {product.quantity}</h3>
                                </div>
                                <div className='bg-light p-3'>
                                    <h4 className=''>Description</h4>
                                    <p className=''>{product.details}</p>
                                </div>
                        </div>

                    </div>

                </div>
        
        </>


    );
}



export default ProductDetails;