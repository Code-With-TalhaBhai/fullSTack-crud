import './App.css';
import Navbar from './components/Navbar';
import Contactform from './components/Contactform';
import Home from './components/Home';
import EditUser from './components/EditUser';
// import {
//   BrowserRouter as Router,
//   // Routes,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AllUsers from './components/AllUsers';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
    <Route exact path="/add" element={  <Contactform/>} />
    <Route exact path="/all" element={<AllUsers/>}/>
    <Route exact path='/edit/:id' element={<EditUser/>} />
    <Route element={  <NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
