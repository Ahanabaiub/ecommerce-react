import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';


const OrderDash = ()=>{
    return(
        <div className="mt-5">
        <Sidebar />

        <div className="w-75 ms-auto">
            <div className="container p-3" >
               <h1>Orders Dash</h1>
               <input className="form-control me-2 mt-3" type="search" placeholder="Search Product..." aria-label="Search" />
               <div className="mt-4">
                   <h2>Orders</h2>
                    <table class="table">
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
                            <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td><Link to="" className="btn btn-success">Details</Link></td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
               </div>
           </div>
        </div>
   </div>
    );
}

export default OrderDash;