  import { useState ,useEffect } from "react";
  import Img from "../../assets/default.jpg"
  import axios from 'axios';
  import './profile.css'
import { useNavigate ,Link } from "react-router-dom";

  const Profile = () => {
    const navigate = useNavigate();
    const handleLogout =()=>{
      localStorage.removeItem("jwtTocken");
      navigate("/LoginReg")
    }
    const[image , setImage]=useState(null)
    const handleImage =(e)=>{
      // setImage(e.target.files[0].name)
      // console.log((e.target.files[0].name));
      const file  = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage(reader.result); // Set the image state to the base64 encoded data
        };
        reader.readAsDataURL(file); // Read the file as a data URL
      }
      // console.log(image)
      // console.log(localStorage.getItem("jwtTocken"));
    }

    const [email, setEmail] = useState("");

  useEffect(() => {
    // Retrieve token from local storage
    const token = localStorage.getItem("jwtTocken");

    // Decode token to extract email
    const decodedToken = decodeToken(token);

    // Set email in state
    setEmail(decodedToken.userEmail);
    
  }, []);


  
const decodeToken = (token) => {
    if (!token) return {};
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const decoded = JSON.parse(window.atob(base64));
    return decoded;
  };


const handleUpload = (e)=>{
  e.preventDefault();
  console.log(e);
  console.log(email)
  console.log(image)
  axios.post("http://localhost:3000/imageUpload", {email:email, image:image}).then((response)=>{
    alert(response.data.message);
    console.log("Image Uploaded");

  }).catch((error)=>{
    console.log(error);
  })
  // fetchdata()
}

const [fName , setfName] = useState();
const [lName , setlName] = useState();
const [userType, setuserType] = useState();
const [Image, setPImage] = useState();
const [allUsersData, setAllUsersData] = useState([]);

  async function fetchdata(){

    await axios.post("http://localhost:3000/getUser", {email}).then((response)=>{
      // console.log(response)
      setfName(response.data.userData.firstName);
      setlName(response.data.userData.lastName)
      setuserType(response.data.userData.userType);
      // const fName = response.data.userData.firstName;
      // const lName = response.data.userData.lastName;
    })
    await axios.post("http://localhost:3000/getImage",{email}).then((response)=>{
      setPImage(response.data.imageData.image);
      // console.log(Image)
      // console.log(image)
      // if(userType === "admin"){
      //   fetchAllUsersData
      // }
    
   })
  }

  const fetchAllUsersData = async() => {
      await axios.get("http://localhost:3000/allUsers").then((response)=>{
      // const allUsersData = response.data.allUsersData
      setAllUsersData(response.data.allUsersData);
      // console.log(allUsersData);
    })
    
  }
  // Image ? "" : fetchdata();
  useEffect(() => {
    fetchdata();
  })
  
  // fetchdata();

  const handelDeletUser = async (id) =>{
    console.log(id);
    await axios.delete(`http://localhost:3000/deleteuser/${id}`).then((response) => {
      console.log(response);
    })
    fetchAllUsersData();
  }
  const [search, setSearch] = useState("");



    return (
      <div className="profileContainer">
      <h1>Profile</h1>
      <div className="dataContainer">
      <div className="imageCon">
      <img  src={Image? Image : Img} alt={image}/>
      <input type="file" accept="image/*" onChange={handleImage}/>
      <button className="btnn" onClick={handleUpload}>Uploade</button>
      </div>
      <div className="infoCon">
      <p><b>Full Name</b>: {fName + ' ' + lName}</p>
      <p><b>Email</b>: {email}</p>
      <p><b>Type</b>: {userType}</p>
      <button className="btnn" onClick={handleLogout}>LogOut</button>
      </div>
      </div>
      {userType === 'admin' &&(
        <div className="usersContainer">
        <div className="btnDiv" >
        <button onClick={fetchAllUsersData} className="btnn">All Users</button>
        <Link to={"/AddUser"} className="btnn">Add User</Link>
        <input className="inputdata" placeholder="Search Content" onChange={(e)=> setSearch(e.target.value)}/>
        </div>
        <div className="userCon">
        {allUsersData.filter(user => {
          if (search.trim() === '') {
            return true; 
          } else {
            return user.firstName.toLowerCase().includes(search.toLowerCase());
          }
        }).map(user =>{
          return(
            <div key={user._id} className="user" >
            <p>First Name: {user.firstName}</p>
            <p>Last Name: {user.lastName}</p>
            <p>Email: {user.email}</p>
            <p>Type: {user.userType}</p>
            <div className="btnDiv">
            <Link to={`/Edit/`+user._id} className="userbtn">Edit</Link>
            <button className="userbtn" onClick={()=>{handelDeletUser(user._id)}}>Delete</button>
            </div>
            </div>
          )
        })}
        </div>
        </div>
      )}
      </div>
    )
  }

  export default Profile