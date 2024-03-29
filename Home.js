import React from 'react';
import {BrowserRouter as Router,Link} from "react-router-dom"; 
import {Switch,Route} from 'react-router';
import Signup from './Signup.js';
import Login from './Login.js';
import Feed from './Feed.js';



const Home=()=>
{
    return(
    <Router>
        <div style={{background:"black"}}>
        <nav  class="navbar navbar-dark bg-black">
            <h1 style={{color:"white"}}>INSTAGRAM</h1>
            
        </nav>
        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
             <img src="data:image/jpeg;base64,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" width= "100%" height= "100%" object-fit= "contain" alt="Instragram"style={{position: "absolute;padding-bottom: 196px;border-top-width: 146px;padding-top: 0px;"}}></img>
            </div>
            <div className="col-4"style={{background:"black",['padding-top']:"225px"}}>
              <div>
                <button class="btn btn-outline-danger btn-lg btn-block"><Link to="/Home" style={{ color: '#FFF' }}>HOME</Link></button>
                <button class="btn btn-outline-danger btn-lg btn-block"><Link to="/Signup" style={{ color: '#FFF' }}>SIGN UP</Link></button>
                <button class="btn btn-outline-danger btn-lg btn-block"><Link to="/Login" style={{ color: '#FFF' }}>SIGN IN</Link></button>
                <button class="btn btn-outline-danger btn-lg btn-block"><Link to="/Feed" style={{ color: '#FFF' }}>FEED</Link></button>
                </div>
            </div> 
          </div>
        </div>
             
        <Switch> 
            
            <Route  path="/Signup"><Signup/></Route>
            <Route  path="/Login"><Login/></Route>
            <Route  path="/Feed" ><Feed/></Route>
         
        </Switch>
        </div>
    </Router>
    
    )
}
export default Home;