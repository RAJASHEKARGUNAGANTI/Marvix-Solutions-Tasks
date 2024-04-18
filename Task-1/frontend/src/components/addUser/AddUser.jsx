import axios from "axios";
import {useState } from 'react';
import toast from 'react-hot-toast'; 
import {Link, useNavigate} from 'react-router-dom';
import './addUser.css'


const  AddUser=()=> {
  const users={
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    userType:""
  }
  const navigate = useNavigate();
  const [user, setUsers] = useState(users);
  const handleChange = (e)=>{
  const {name, value} = e.target;
      setUsers({...user ,[name]:value});
      delete user.Password; // find why extra password is comming in users
      // console.log(user);
    }
  const submitHandler = async (e)=>{
    e.preventDefault();
    await axios.post("http://localhost:3000/register", user)
    .then((response)=>{
      toast.success(response.data.message,{position:"top-right"})
      // console.log(user)
      alert("New User Added")
      navigate("/Profile");
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  return (
      <div className="AddContainer">
      <div className="container">
      <Link className="userbtn" to={"/Profile"} >Back</Link>
      <h1>Add User </h1>
      <form onSubmit={submitHandler} className="formContainer">
      <input className="inputdata" onChange={handleChange} placeholder="First Name" type="text" value={user.firstName} name="firstName"/>
      <input className="inputdata" onChange={handleChange} placeholder="Last Name" type="text" value={user.lastName} name="lastName"/>
      <input className="inputdata" onChange={handleChange} placeholder="Email" type="text" value={user.email} name="email"/>
      <input className="inputdata" onChange={handleChange} placeholder="Password" type="password" value={user.password} name="password"/>
      <input className="inputdata" onChange={handleChange} placeholder="User Type" type="text" value={user.userType} name="userType"/>
      <button className="btn" type="submit">Add</button>
      </form>
      </div>
      </div>
  )
}

export default AddUser