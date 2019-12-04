import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Feed from './Feed';
import Signup from './Signup';


const Login=()=>
 {
    const[userName,setUsername]=React.useState("");
    const[passWord,setPassword]=React.useState("");
    const[login,setLogin]=React.useState([]);

    const handleUsername=(e)=>
    {
        setUsername(e.target.value);

    }
    const handlePassword=(e1)=>
    {
        setPassword(e1.target.value)
    }
    const handleClick=(userName,passWord)=>
    {
        
        
        const UN="halima@gmail.com";
        const PW="Halima";
            if(userName!== UN && passWord!== PW )
            {
                alert("enter correct id and password");
            }
            else{
                setLogin(alert('Login successfull'));
            }
    }
   
    return(<Router><div><br></br><br></br>
        <div className="Container-fluid">
           <div className="row">
               <div className="col-4" style={{background:"black"}}> </div>
               <div className="col-4 btn btn-light" style={{background:"black"}}>
                   <div>
                   <h3><i>INSTAGRAM</i></h3>
                   <input type="text" className="form-control" placeholder="UserName" value={userName} onChange={handleUsername}></input><br></br>
                   <input type="password" className="form-control" placeholder="PassWord" value={passWord} onChange={handlePassword}></input><br></br>
                   <button onClick={()=>handleClick(userName,passWord)} className="alert alert-primary btn-primary btn-sm btn-block" value={login}><Link to="/Feed" >LOGIN</Link></button><br></br>
                   </div>
                   <div>
                       <h6>Dont't have an account? <Link to='/Signup' >Sign up</Link></h6>
                   </div>
               </div>
               <div className="col-4" style={{background:"black"}} ></div>
              
           </div>
       </div>
      
       <Switch>
           <Route path='/Signup'><Signup /></Route>
           <Route path="/Feed" ><Feed /></Route>
       </Switch> 
       </div>
   </Router>)
}

export default Login;