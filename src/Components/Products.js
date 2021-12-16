
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Products = (props)=>{

    let count = 0;

    
   

    return(
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Unit-Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.products.map(product=>{ 

                         return   <tr key={product.id}>
                            <td>{++count}</td>
                            <td>{product.name}</td>
                            <td>{product.unitPrice}</td>
                            <td className={(product.quantity<=10)?`mt-2 badge shadow bg-danger` : ''}>{product.quantity}</td>
                            <td>
                                <Link to={`/product/details/`+product.id} className="text-warning fs-3 me-5"><i className="bi bi-arrow-right-square-fill"></i></Link>
                                <span className='text-danger fs-3' style={{cursor:'pointer'}} onClick={()=>props.handelDelete(product.id)}><i className="bi bi-x-square-fill"></i></span>
                            </td>
                        </tr>

                          }
                        // <tr key={product.id}>
                        //     <td>{++count}</td>
                        //     <td>{product.name}</td>
                        //     <td>{product.unitPrice}</td>
    
                        //     <td className='mt-2 badge bg-danger'>{product.quantity}</td>
                        //     <td><Link to="" className="btn btn-success">Details</Link></td>
                        // </tr>
                        
                    )
                    }
                </tbody>
               
            </table>
           
        </div>
    );
}

export default Products;