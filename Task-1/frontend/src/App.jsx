
import { BrowserRouter as Router, Routes, Route ,Navigate} from 'react-router-dom';
import './App.css';
import LoginReg from './components/login/LoginReg';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import NavBar from './components/navBar/NavBar';
import Edit from './components/edit/Edit';
import AddUser from './components/addUser/AddUser';

function App() {
  const isAuth = !!localStorage.getItem('jwtTocken');
  // console.log('isAuth', isAuth);
  return (
    
    <Router>
    <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/LoginReg" element={<LoginReg />} />
        <Route path="/Profile" element={isAuth ? <Profile /> : <Navigate to="/LoginReg" />} />
        <Route path="/Edit/:id" element={<Edit />} />
        <Route path="/AddUser" element={<AddUser />} />
      </Routes>
    </Router>
  );
}

export default App;
