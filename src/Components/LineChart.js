import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const LineChart =(props)=>{

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
            //backgroundColor: props.color,
            borderColor: props.borderColor,
            backgroundColor: props.backgroundColor,
          }
         
        ],
      };


      return(
          <>
                <Line options={options} data={data} />
          </>
      );

}

export default LineChart;