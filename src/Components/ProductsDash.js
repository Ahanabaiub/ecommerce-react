import Sidebar from "./Sidebar";
import Products from "./Products";
import React, { useEffect, useState } from 'react';
import  axios  from 'axios';
import TopProductCard from "./TopProductCard";

const ProductsDash = ()=>{

    const[products,setProducts]=useState([]);
    const[topProducts,setTopProducts] = useState([]);
    const[catagorys,setCatagorys] = useState([]);

    let count = 1;
    

  



    //.........form data.............


    let [formPName,setFormPName] = useState('');
    let [formPUnitPrice,setFormPUnitPrice] = useState('');
    let [formPQuantity,setFormPQuantity] = useState('');
    let [formPImage,setFormPImage] = useState('');
    let [formPCategoryId,setFormPCategoryId] = useState('');
    let [formPDescription,setFormPDescription] = useState('');


    useEffect(async ()=>{

        
        axios.get('/api/product/top-sold').then(resp=>{
            setTopProducts(resp.data);
            
            
        })
        .catch(err=>{
            console.log(err);
        });


        axios.get('/api/product/all').then(resp=>{
            setProducts(resp.data);
        })
        .catch(err=>{
            console.log(err);
        });

        let catapi = await axios.get('/api/category/all');
        setCatagorys(catapi.data);



    },[]);

    ///............validation............
    const[formValidation,setFormValidation]=useState('');
    const[validationName,setValidationName]=useState('');
    const[validationqty,setValidationQty]=useState('');
    const[validationPrice,setValidationPrice]=useState('');
    const[validationImage,setValidationImage]=useState('');
    const[validationDesc,setValidationDesc]=useState('');
    const[validationCat,setValidationCat]=useState('');


    let saveData=async (e)=>{
        e.preventDefault();

      
       

        //console.log("submitted");
        setFormValidation('was-validated');

        let v=document.querySelectorAll('.need');
        v.forEach((e)=>console.log(e.setAttribute('required','')));

        let isValid = true;
        

        if(formPName==''){
            setValidationName('Name required');
            isValid=false;
        }

        if(formPUnitPrice==''){
            setValidationPrice('Price needed.');
            isValid=false;
            
        }

        if(formPQuantity==''){
            setValidationQty('Quantity needed.');
            isValid=false;
            
        }

        if(formPDescription==''){
            setValidationDesc('Description Required.');
            isValid=false;
        }

        if(formPImage==''){
            setValidationImage('Image Link required.');
            isValid=false;
        }

        if(formPCategoryId==''){

            //document.querySelector('#catSelect').setAttribute('class','form-select is-invalid');

            setValidationCat('Choose a catagory.')


            isValid=false;
        }
        else{
            //document.querySelector('#catSelect').setAttribute('class','form-select is-valid');

        }
        
       

        if(!isValid)
        {
           
           
            return;
        }

        //////...........remove validation.........
        setFormValidation('');
        document.querySelectorAll('.need').
        forEach((e)=>console.log(e.removeAttribute('required')));


        
        let obj={
            name:formPName,
            unitPrice:formPUnitPrice,
            quantity:formPQuantity,
            details:formPDescription,
            image:formPImage,
            catagoryid:formPCategoryId
        }

       
        //console.log(obj);

        axios.post("/api/product/save",obj)
        .then(resp=>{

            axios.get('http://localhost:8000/api/product/all').then(resp=>{
                setProducts(resp.data);
                
            })
            .catch(err=>{
                console.log(err);
            });

        }).catch(err=>{
            console.log(err);
        }); 

        e.target.reset();

       
        //setProducts(pr.data);
        
       
        
        
    }
    ///........delete........
    let deleteProduct=async (id)=>{
        if(window.confirm("Do you want to delete this?")){
            let resp = await axios.delete('/api/product/delete/'+id);
       

            let resp2 = await axios.get('/api/product/all');
            setProducts(resp2.data);
        }
      
        

        //console.log("pid: "+id);
    }

//...............
    let handelOnInputChange =async (e)=>{

        let query = e.target.value;

        let result = await axios.get('/api/product/search?q='+query);

        setProducts(result.data);

    }

   

    return(
        <div className="mt-5">
            <Sidebar />

            <div className="w-75 ms-auto">
            <div className="container p-3" >
{/*            .........top products........ */}
                        <h2>Top Sold Products</h2>
                        <div className="row mt-3">
                           
                            {
                            
                                topProducts.map(e=>(
                                    <TopProductCard key={count} rank={count++}
                                    title={e.product.name} image={e.product.image} unitSold={e.unitSold}/>
                                    
                                ))
                            }
 
                                
                            

                        </div>

                      {/* {topProducts.forEach((e)=>{console.log(e.product.name)})}   */}
                      
                    <div className="mt-5">
                            <div className="accordion" id="accordionExample">
                               
                               
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed w-25" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Create Product
                                    </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body ">
                                                                                                
                                            <form onSubmit={saveData} className={formValidation} >                                        
                                                <div className="mb-6">
                                                    
                                                    <input type="text" name={formPName}  onChange={e=>setFormPName(e.target.value)} className="form-control need" placeholder="Name" />
                                                    <div className="invalid-feedback">
                                                        {validationName}
                                                    </div>
                                                </div>            
                                                <div className="row g-3 my-2">
                                                <div className="col">
                                                    <input type="text" name={formPUnitPrice} onChange={e=>setFormPUnitPrice(e.target.value)} className="form-control need" placeholder="Unit price"/>
                                                    <div className="invalid-feedback">
                                                        {validationPrice}
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <input type="text" className="form-control need"  onChange={e=>setFormPQuantity(e.target.value)} name={formPQuantity} placeholder="Quantity" />
                                                    <div className="invalid-feedback">
                                                        {validationqty}
                                                    </div>
                                                </div>
                                                </div>  

                                                    <div className="row g-3 my-2">
                                                <div className="col">
                                                    <input type="text" name={formPImage}  onChange={e=>setFormPImage(e.target.value)} className="form-control need" placeholder="Image"/>
                                                    <div className="invalid-feedback">
                                                        {validationImage}
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <select className="form-select need" id='catSelect'  onChange={e=>setFormPCategoryId(e.target.value)} name={formPCategoryId} >
                                                        <option value='' key='choose' >--Select--</option>
                                                       
                                                        {
                                                            catagorys.map(cat=>(
                                                                <option key={cat.id} value={cat.id}>{cat.name}</option>
                                                            ))
                                                        }
                                                    </select>
                                                    <div className="invalid-feedback">
                                                        {validationCat}
                                                    </div>
                                                </div>
                                                </div>  

                                                <div className="my-3">
                                                    
                                                    <textarea className="form-control w-75 need" name={formPDescription} onChange={e=>setFormPDescription(e.target.value)} placeholder="Description" style={{height:'7.5rem'}}></textarea>
                                                    <div className="invalid-feedback">
                                                        {validationDesc}
                                                    </div>
                                                </div>
                                                
                                                <br/>
                                                <button type="submit" className="btn btn-primary">Submit</button>
                                            </form>

                                            
                                        </div>
                                    </div>
                                </div>
                                </div>
                          
                    </div> 
                           
                        
                    <input className="form-control w-75  me-2 mt-5" 
                        onChange={handelOnInputChange}  type="search" placeholder="Search Product..." aria-label="Search" />
                    <div className="mt-4 ">
                        <h2>Products</h2>
                        <Products products={products} handelDelete={deleteProduct}/>
                    </div>
                </div>
                </div>
         </div>
    );
}

export default ProductsDash;