import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Login from './Login';
const Signup=()=>
{
    const[email,setEmail]=React.useState("");
    const[fname,setFname]=React.useState("");
    const[lname,setLname]=React.useState("");
    const[password,setPassword]=React.useState("");
    const[reg,setReg]=React.useState([]);
    var UN=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$/;
    var FN=/^A-Za-z$/;
    var LN=/^A-Za-z$/;
    var PW=/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/;
    const handleMail=(e)=>
    {
        setEmail(e.target.value)
    }
    const handleFname=(f)=>
    {
        setFname(f.target.value)
    }
    const handleLname=(l)=>
    {
        setLname(l.target.value)
    }
    const handlePassword=(p)=>
    {
        setPassword(p.target.value)
    }
    const handleClick=(email,fname,lname,password)=>
    {
       
       if(email==='' && lname==='' && fname==='' && password==='')
       {
            alert("Register Not Successfull");
        
         
       }
       else{
           setReg(alert("RegisterSuccessfull"));
       }
      
      
    }
return (
<Router><div><br></br>
   <div className="Container-fluid">
       <div className="row">
           <div className="col-4" style={{background:"black"}}></div>
           <div className="col-4 btn btn-light" style={{background:"black"}}>
               <div>
                <h1>INSTAGRAM</h1>
                <h5>Sign up to see photos and vedios from your friends.</h5><br></br>
                <input type="textarea" className="form-control" placeholder="Email-id"onChange={handleMail} value={email}></input><br></br><br></br>
                <input type="textarea" className="form-control" placeholder="FirstName"onChange={handleFname} value ={fname}></input><br></br><br></br>
                <input type="textarea" className="form-control" placeholder="LastName" onChange={handleLname} value={lname}></input><br></br><br></br>
                <input type="password" className="form-control" placeholder="PassWord" onChange={handlePassword} value={password}></input>[must contains special character,numbers,captial and small letter]<br></br><br></br>
                <button type=" button" onClick={()=>handleClick(email,fname,lname,password)} className="alert alert-primary btn-primary btn-lg btn-block" value={reg} ><Link to ='/Login'>SIGN-UP</Link></button><br></br><br></br>
                <h5>By Signing up,you agree to our Terms and Privacy Policy.</h5>
                <input type="checkbox"></input> I agree the Terms and Privacy Policy.
                </div><br></br>
                <div>
                    <h6>Have an Account?<Link to ="/Login">Log In</Link></h6>
                </div>
           </div>
           <div className="col-4" style={{background:"black"}}></div>
       </div><br></br>
   </div>
   <Switch>
       <Route path="/Login" ><Login /></Route>
   </Switch>
</div></Router>
)
}
export default Signup;