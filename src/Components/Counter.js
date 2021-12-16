import React from 'react';
import { useState  } from 'react';
import {Link, useRouteMatch, Route,Switch} from 'react-router-dom';

const Counter = ()=>{

    const[count,setCount] = useState(0);
    let {path,url} = useRouteMatch();

    return (

        <div>
            <p>Click the button to increse Count. Have fun....</p>
            <button onClick={()=>setCount(count+1)}>Click</button>
            <h2>Currently Count is {count}</h2>
            <Link to={`${url}/more`}>More</Link><br/>
            <Link to={`${url}/more1`}>More 1</Link><br/>
           <Switch>
           <Route exact path={path}>
               Default things
            </Route>
           <Route path={`${path}/:q`}>
                <More/>
            </Route>
           </Switch>
        </div>
       
    );
}

const More=()=><h1>More content</h1>


export default Counter;