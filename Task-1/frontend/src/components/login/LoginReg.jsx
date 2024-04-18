import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./login.css";
// import toast from "react-hot-toast"

const LoginReg = () => {
  const [showLogin , setShowLogin] = useState(true);
  
  const [logindata, setLoginData] = useState({
    email:"",
    password:"",
    userType:""
  });

  const [regData, setRegData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    userType:"user"
  });

const handleChange =(e) =>{
  const {name, value} = e.target;
  if(showLogin){
    setLoginData(prevData=> ({
      ...prevData,
      [name]:value
    }))
  }
  else{
    setRegData(prevData=> ({
      ...prevData,
      [name]:value
    }))
  }
}

const [sKey , setSKey] = useState();

const changeSKey=(e)=>{
  if(setCheck){
    setSKey(e.target.value);
    // console.log(sKey);
  }
}

const navigation = useNavigate();


const handelLogin =(e) =>{
  e.preventDefault();
  console.log(logindata);
  if(logindata.userType === "admin"){
    if(sKey !=="Admin123"){
      alert("Please enter Correct Secret Key");
    }else{
      axios.post("http://localhost:3000/login", logindata).then((response)=>{
        const jwtTocken = response.data.jwtTocken;
        localStorage.setItem("jwtTocken", jwtTocken);
        console.log(jwtTocken);
        console.log("Admin Login successful");
        console.log(logindata);
        navigation("/");
        alert(response.data.message);
        return jwtTocken;
      }).catch((error) =>{
        console.log("error: " + error);
        alert("Admin Invalid Credentials" + error);
      })
    }

  } 
  else {
    axios.post("http://localhost:3000/login", logindata).then((response)=>{
      const jwtTocken = response.data.jwtTocken;
      localStorage.setItem("jwtTocken", jwtTocken);
      console.log(jwtTocken);
      console.log("User Login successful");
      console.log(logindata);
      navigation("/");
      alert(response.data.message);
      return jwtTocken;
    }).catch((error) =>{
      console.log("error: " + error);
      alert("User Invalid Credentials" + error);
    })
  }
   
}


const handelReg =(e) =>{
  e.preventDefault();
  console.log(regData);
  if(regData.userType === "admin"){
    if(sKey !=="Admin123"){
      alert("Please enter Correct Secret Key");
    }else{
      axios.post("http://localhost:3000/register", regData).then((response)=>{
    console.log("Registration Success");
    navigation("/")
    // toast.success(response.data.message,{position: 'top-right'});
    alert("Admin Registration Success");
    console.log(regData);
    console.log(response);
  }).catch((response)=>{
    // toast.error(response,{position: 'top-right'});
    // console.log(response.error);
    alert(response.error + "Admin Registration Failure");
  })
    }
  }else{
    axios.post("http://localhost:3000/register", regData).then((response)=>{
    console.log("Registration Success");
    navigation("/")
    // toast.success(response.data.message,{position: 'top-right'});
    alert("User Registration Success");
    console.log(regData);
    console.log(response);
  }).catch((response)=>{
    // toast.error(response,{position: 'top-right'});
    // console.log(response.error);
    alert(response.error + " User Registration Failure");
  })
  }


  
}


const handelClick = ()=>{
  setShowLogin(prev => prev? false : true);
  }



  const [check , setCheck] = useState(false);
  const handelRadio = ()=>{
    console.log(check)
    regData.userType = check ? "user" : 'admin'
    logindata.userType = check ? "user" : 'admin'
    setCheck(prev => prev? false : true);
    // check = check ? false : true
  }



  return (
    <div className="containerTotal">
    {showLogin  &&( 
      <div className="container">
      <h1>Login</h1>
      <form onSubmit={handelLogin} className="formContainer">
      <input className="inputdata" onChange={handleChange} placeholder="Email" type="email" value={logindata.email} name="email"/>
      <input className="inputdata" onChange={handleChange} placeholder="Password" type="password" value={logindata.password} name="password"/>
      {check && (<input className="inputdata" onChange={changeSKey} placeholder="Secreat Key" type="text" value={sKey} name="secreatKey" />)}
      <button className="btn" type="submit">Login</button>
      </form>
      <p onClick={handelClick} >Dont have a account <span className="shortLink"><u><b>Register</b></u></span> </p>
      </div>
    )}{!showLogin &&(
      <div className="container">
      <h1>Registration </h1>
      <label><input type="radio" value={true} onClick={handelRadio} checked={check}  /> Admin User</label>
      <form onSubmit={handelReg} className="formContainer">
      <input className="inputdata" onChange={handleChange} placeholder="First Name" type="text" value={regData.firstName} name="firstName"/>
      <input className="inputdata" onChange={handleChange} placeholder="Last Name" type="text" value={regData.lastName} name="lastName"/>
      <input className="inputdata" onChange={handleChange} placeholder="Email" type="text" value={regData.email} name="email"/>
      <input className="inputdata" onChange={handleChange} placeholder="Password" type="password" value={regData.password} name="password"/>
      {check && (      <input className="inputdata" onChange={changeSKey} placeholder="Secreat Key" type="text" value={sKey} name="secreatKey" />)}
      <button className="btn" type="submit">Register</button>
      </form>
      <p onClick={handelClick} >Have Account <span className="shortLink"><u><b>Login</b></u></span> </p>
      </div>
  )}
    </div>
  )
}

export default LoginReg