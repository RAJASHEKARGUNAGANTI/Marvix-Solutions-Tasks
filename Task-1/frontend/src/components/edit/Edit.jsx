import axios from "axios"
import { useState ,useEffect} from "react"
import { useParams, useNavigate } from "react-router-dom"
import toast from "react-hot-toast";


const Edit = () => {
    const users = {
        firstName:"",
        lastName:"",
        email:""
    }
    const par  = useParams()
    const navigate = useNavigate()
    const [user, setUser] = useState(users);

    const handleChange =(e)=>{
        const {name,value} = e.target;
        setUser({...user,[name]:value})
    }

    useEffect(()=>{
        axios.get(`http://localhost:3000/getuser/${par.id}`)
        .then((response)=>{
          setUser(response.data.user);
        })
        .catch((error)=>{console.log(error)});
      },[par.id])
      const submitHandler = async(e)=>{
        e.preventDefault();
        await axios.post(`http://localhost:3000/update/${par.id}`,user)
        .then((response)=>{
            alert(response.data.message);
            toast.success(response.data.message, {position: "top-right"});
            navigate("/");
        })
        .catch((error)=>{console.log(error)});
    }


  return (
    <div className="container">
      <h1>Registration </h1>
      <form onSubmit={submitHandler} className="formContainer">
      <input className="inputdata" onChange={handleChange} placeholder="First Name" type="text" value={user.firstName} name="firstName"/>
      <input className="inputdata" onChange={handleChange} placeholder="Last Name" type="text" value={user.lastName} name="lastName"/>
      <input className="inputdata" onChange={handleChange} placeholder="Email" type="text" value={user.email} name="email"/>
      <button className="btn" type="submit">Register</button>
      </form>
      </div>
  )
}

export default Edit