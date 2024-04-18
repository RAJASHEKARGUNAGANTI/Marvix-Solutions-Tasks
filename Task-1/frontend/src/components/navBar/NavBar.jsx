import {Link} from 'react-router-dom';
import {useState,useEffect} from "react"
import './navbar.css';
import axios from 'axios';
const NavBar = () => {

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


const [FirstName, setFirstName] = useState();
const [LastName, setLastName] = useState();
const [Image, setImage] = useState();
const handleClick = async () => {
  console.log(email);
  await axios.post("http://localhost:3000/getUser", {email}).then((response)=>{
  // console.log(response);
  // console.log(response.data.userData.firstName);
  // const FirstName = response.data.userData.firstName;
  setFirstName(response.data.userData.firstName);
  // const LastName = response.data.userData.lastName;
  setLastName(response.data.userData.lastName);
})
await axios.post("http://localhost:3000/getImage",{email}).then((response)=>{
  // console.log(response);
  // console.log(response.data.imageData.image.data)
  // const Image = response.data.imageData.image;
  setImage(response.data.imageData.image);
})
}

  return (
    <div className='navContainer'>
    <Link to={"/"} className='links'>Home</Link>
    <Link to={"/LoginReg"}className='links'>Login / Register</Link>
    <Link to={{
      pathname: "/profile",
      state: { FirstName, LastName, Image }
    }} className='links' onClick={handleClick}>Profile</Link>
    </div>
  )
}

export default NavBar