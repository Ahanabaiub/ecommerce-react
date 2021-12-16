import Sidebar from "./Sidebar";

import { useEffect,useState } from "react";
import BarChart from "./BarChart";
import axios from "axios";
import LineChart from "./LineChart";



const Reports = ()=>{


    const[mnSelles, setmnSelles] = useState([]);
    const [yySelles,setyySelles] = useState([]);


    useEffect(()=>{

        axios.get('http://localhost:8000/api/report/get-mn-selles').then(resp=>{
            setmnSelles(resp.data);
        })
        .catch(err=>{
            console.log(err);
        });

        axios.get('http://localhost:8000/api/report/get-yy-selles').then(resp=>{
            setyySelles(resp.data);
        })
        .catch(err=>{
            console.log(err);
        });

    },[])


    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug',
    'Sep','Oct','Nov','Dec'];

    return(
        <div className="mt-5">
            <Sidebar />
            <div className="w-75 ms-auto">
                <div className="container p-3">

                        <div>
                           <div className="mt-3">
                                <h2>Monthly Sale Report</h2>
                                    <BarChart title='Monthly Selles of current Year' color='#0097a7' label='' 
                                    data={mnSelles} 
                                    labels={months} />
                           </div>
                            <div className="mt-3">
                                        
                                    <h2>Yearly Sales Report</h2>
                                    <LineChart title='Yearly Selles' borderColor='#FF6384' backgroundColor='#bc3e53' label='Last 6 year sales data' 
                                    data={Object.values(yySelles)} 
                                    labels={Object.getOwnPropertyNames(yySelles)} />
                            </div>
                        </div>


                </div>

            </div>

        </div>
    );

}

export default Reports;