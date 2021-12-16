import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import AppHome from './AppHome';
import TopNav from './Components/TopNav';
import Homepg from './Components/Homepg';
import Counter from './Components/Counter';
import Products from './Components/Products';

ReactDOM.render(
  <React.StrictMode>
     <div>
        <AppHome/>
     </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
