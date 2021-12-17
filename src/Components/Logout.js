
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

const Logout =()=>{

    let history = useHistory();

    if(localStorage.getItem('user')){




        axios.get('/api/logout').then(resp=>{
          localStorage.removeItem('user');
          
      })
      .catch(err=>{
          console.log(err);
      });
      history.push('/login');
      return <h1>Logout Successful.</h1>;
      }
      else{
        return <h1>User does not exist!!!!</h1>;
        //return history.push('/login');
      }

      

}


export default Logout;