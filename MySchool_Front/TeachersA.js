import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Login from './Login';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const TeachersA = () => {
 
  const userRoleId = localStorage.getItem('userRoleId');
  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);
  const handleLogout = async () => {


    const url = 'https://localhost:44361/api/Account/Logout';
    try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
    
    });
  
    if (response.ok) {
      console.log('Logout successful');
      localStorage.setItem('userRoleId', 0);
      navigate('/');
    } else {
      console.error('Logout failed');
    }
    } catch (error) {
    console.error('Error during logout:', error);
    }
  };
  useEffect(() => {
    if (userRoleId == 0 || userRoleId == 2) {
      navigate('/');
    }
    
    
  }, []); 

  return (
    
    <>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark ftco_navbar ftco-navbar-light" id="ftco-navbar">
	    <div className="container d-flex align-items-center">
	    	<a className="navbar-brand" href="/Home">MySchool</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="oi oi-menu"></span> Menu
	      </button>
	      <div className="collapse navbar-collapse" id="ftco-nav">
	        <ul className="navbar-nav ml-auto">
	        	<li className="nav-item "><a href="/Home" className="nav-link pl-0">Home</a></li>
				<li className="nav-item "><a href="/CoursesA" className="nav-link">Courses</a></li>
	        	<li className="nav-item active"><a href="/TeachersA" className="nav-link">Teachers</a></li>
	        	<li className="nav-item"><a href="/Pricing" className="nav-link">Pricing</a></li>
	            <li className="nav-item"><a href="/Contact" className="nav-link">Contact</a></li>
				<li className="nav-item"><a href="#" className="nav-link" onClick={handleLogout}>Logout</a></li>
	        </ul>
	      </div>
	    </div>
	  </nav>
    <h4 style={{ margin: "40px" }}>All Teachers</h4>
  
   
     <Footer /> 
 
  </>
     
  );
};

export default TeachersA;



