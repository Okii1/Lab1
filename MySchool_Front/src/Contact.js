import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import bg_courses from './images/courses.webp';
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faGooglePlus, faInstagram } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import courseImage1 from './images/course-1.jpg';
import courseImage2 from './images/course-2.jpg';
import courseImage3 from './images/course-3.jpg';
import courseImage4 from './images/course-4.jpg';
import courseImage5 from './images/course-5.jpg';
import teacher1 from './images/teacher-1.jpg';
const Contact = () => {
  
  const userRoleId = localStorage.getItem('userRoleId');
  const navigate = useNavigate();
 
  
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
    if (userRoleId == 0) {
      navigate('/');
    }
    
    
  }, []); 
  if(userRoleId == 1)
  {
  return(
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ftco_navbar ftco-navbar-light" id="ftco-navbar">
          <div className="container d-flex align-items-center">
              <a className="navbar-brand" href="/Home">MySchool</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="oi oi-menu"></span> Menu
            </button>
            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav ml-auto">
                  <li className="nav-item "><a href="/Home" className="nav-link pl-0">Home</a></li>
                  <li className="nav-item"><a href="/CoursesA" className="nav-link">Courses</a></li>
                  <li className="nav-item"><a href="/TeachersA" className="nav-link">Teachers</a></li>
                  <li className="nav-item "><a href="/Pricing" className="nav-link">Pricing</a></li>
                  <li className="nav-item active"><a href="/Contact" className="nav-link">Contact</a></li>
                  <li className="nav-item"><a href="#" className="nav-link" onClick={handleLogout}>Logout</a></li>
              </ul>
            </div>
          </div>
        </nav>
          <br></br>
         
      <div class="container">
        <div class="row d-flex mb-5 contact-info">
          <div class="col-md-3">
          	<div class="bg-light align-self-stretch box p-4 text-center">
          		<h3 class="mb-4">Address</h3>
	            <p>	203 Fake St. Mountain View, San Francisco, California, USA</p>
	          </div>
          </div>
          <div class="col-md-3 ">
          	<div class="bg-light align-self-stretch box p-4 text-center">
          		<h3 class="mb-4">Contact Number</h3>
	            <p><a href="tel://1234567920">	+2 392 3929 210</a></p>
	          </div>
          </div>
          <div class="col-md-3">
          	<div class="bg-light align-self-stretch box p-4 text-center">
          		<h3 class="mb-4">Website</h3>
	            <p><a href="#">yoursite.com</a></p>
	          </div>
          </div>
          <div class="col-md-3 ">
          	<div class="bg-light align-self-stretch box p-4 text-center">
          		<h3 class="mb-4">Email Address</h3>
	            <p><a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
	          </div>
          </div>
        
        </div>
      </div>
          <Footer /> 
          </div>
  );
  
  }
  else if(userRoleId == 2){
      return(
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark ftco_navbar ftco-navbar-light" id="ftco-navbar">
              <div className="container d-flex align-items-center">
                  <a className="navbar-brand" href="/Home">MySchool</a>
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="oi oi-menu"></span> Menu
                </button>
                <div className="collapse navbar-collapse" id="ftco-nav">
                  <ul className="navbar-nav ml-auto">
                      <li className="nav-item "><a href="/Home" className="nav-link pl-0">Home</a></li>
                      <li className="nav-item"><a href="/Courses" className="nav-link">Courses</a></li>
                      <li className="nav-item"><a href="/Teachers" className="nav-link">Teachers</a></li>
                      <li className="nav-item "><a href="/Pricing" className="nav-link">Pricing</a></li>
                      <li className="nav-item active"><a href="/Contact" className="nav-link">Contact</a></li>
                      <li className="nav-item"><a href="#" className="nav-link" onClick={handleLogout}>Logout</a></li>
                  </ul>
                </div>
              </div>
            </nav>
            
         <br></br>
         
         <div class="container">
        <div class="row d-flex mb-5 contact-info">
          <div class="col-md-3">
          	<div class="bg-light align-self-stretch box p-4 text-center">
          		<h3 class="mb-4">Address</h3>
	            <p>	203 Fake St. Mountain View, San Francisco, California, USA</p>
	          </div>
          </div>
          <div class="col-md-3 ">
          	<div class="bg-light align-self-stretch box p-4 text-center">
          		<h3 class="mb-4">Contact Number</h3>
	            <p><a href="tel://1234567920">	+2 392 3929 210</a></p>
	          </div>
          </div>
          <div class="col-md-3">
          	<div class="bg-light align-self-stretch box p-4 text-center">
          		<h3 class="mb-4">Website</h3>
	            <p><a href="#">yoursite.com</a></p>
	          </div>
          </div>
          <div class="col-md-3 ">
          	<div class="bg-light align-self-stretch box p-4 text-center">
          		<h3 class="mb-4">Email Address</h3>
	            <p><a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
	          </div>
          </div>
        
        </div>
      </div>
        <Footer /> 
        </div>
      );
      
	}
};

     

export default Contact;

