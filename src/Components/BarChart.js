import React from 'react';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  

const BarChart = (props)=>{


    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: props.title
          },
        },
      };
      
      const labels = props.labels;
    
      
      
      const data = {
        labels,
        datasets: [
          {
            label: props.label,
            data: props.data,
            backgroundColor: props.color,
          }
         
        ],
      };

    return(
        <>
            <Bar options={options} data={data} />
        </>
    );

}

export default BarChart;