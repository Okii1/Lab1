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
import bg_1 from './images/bg_1.jpg';
import bg_2 from './images/bg_2.jpg';
import bg_3 from './images/bg_3.jpg';
import bg_5 from './images/bg_5.jpg';
import courseImage5 from './images/course-5.jpg';
import teacher1 from './images/teacher-1.jpg';
const Pricing = () => {
  
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
    if (userRoleId == 0 ) {
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
                  <li className="nav-item active"><a href="/Pricing" className="nav-link">Pricing</a></li>
                  <li className="nav-item"><a href="/Contact" className="nav-link">Contact</a></li>
                  <li className="nav-item"><a href="#" className="nav-link" onClick={handleLogout}>Logout</a></li>
              </ul>
            </div>
          </div>
        </nav>
          <br></br>
    	<div className="container">
    		<div className="row">
        	<div className="col-md-6 col-lg-3 ">
        		<div className="pricing-entry bg-light pb-4 text-center">
        			<div>
	        			<h3 className="mb-3">Basic</h3>
	        			<p><span className="price">$24.50</span> <span className="per">/ 5mos</span></p>
	        		</div>
	        		<div className="img" style={{ backgroundImage: `url(${bg_1})` }}></div>
	        		<div className="px-4">
	        			<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        			</div>
        			<p className="button text-center"><a href="#" className="btn btn-primary px-4 py-3">Take A Course</a></p>
        		</div>
        	</div>
        	<div className="col-md-6 col-lg-3 ">
        		<div className="pricing-entry bg-light pb-4 text-center">
        			<div>
	        			<h3 className="mb-3">Standard</h3>
	        			<p><span className="price">$34.50</span> <span className="per">/ 5mos</span></p>
	        		</div>
	        		<div className="img" style={{ backgroundImage: `url(${bg_2})` }}></div>
        			<div className="px-4">
	        			<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        			</div>
        			<p className="button text-center"><a href="#" className="btn btn-secondary px-4 py-3">Take A Course</a></p>
        		</div>
        	</div>
        	<div className="col-md-6 col-lg-3 ">
        		<div className="pricing-entry bg-light active pb-4 text-center">
        			<div>
	        			<h3 className="mb-3">Premium</h3>
	        			<p><span className="price">$54.50</span> <span className="per">/ 5mos</span></p>
	        		</div>
	        		<div className="img" style={{ backgroundImage: `url(${bg_3})` }}></div>
        			<div className="px-4">
	        			<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        			</div>
        			<p className="button text-center"><a href="#" className="btn btn-tertiary px-4 py-3">Take A Course</a></p>
        		</div>
        	</div>
        	<div className="col-md-6 col-lg-3 ">
        		<div className="pricing-entry bg-light pb-4 text-center">
        			<div>
	        			<h3 className="mb-3">Platinum</h3>
	        			<p><span className="price">$89.50</span> <span className="per">/ 5mos</span></p>
	        		</div>
	        		<div className="img" style={{ backgroundImage: `url(${bg_5})` }}></div>
        			<div className="px-4">
	        			<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        			</div>
        			<p className="button text-center"><a href="#" className="btn btn-quarternary px-4 py-3">Take A Course</a></p>
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
                      <li className="nav-item active"><a href="/Pricing" className="nav-link">Pricing</a></li>
                      <li className="nav-item"><a href="/Contact" className="nav-link">Contact</a></li>
                      <li className="nav-item"><a href="#" className="nav-link" onClick={handleLogout}>Logout</a></li>
                  </ul>
                </div>
              </div>
            </nav>
            
         <br></br>
         <div className="container">
    		<div className="row">
        	<div className="col-md-6 col-lg-3 ">
        		<div className="pricing-entry bg-light pb-4 text-center">
        			<div>
	        			<h3 className="mb-3">Basic</h3>
	        			<p><span className="price">$24.50</span> <span className="per">/ 5mos</span></p>
	        		</div>
	        		<div className="img" style={{ backgroundImage: `url(${bg_1})` }}></div>
	        		<div className="px-4">
	        			<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        			</div>
        			<p className="button text-center"><a href="#" className="btn btn-primary px-4 py-3">Take A Course</a></p>
        		</div>
        	</div>
        	<div className="col-md-6 col-lg-3 ">
        		<div className="pricing-entry bg-light pb-4 text-center">
        			<div>
	        			<h3 className="mb-3">Standard</h3>
	        			<p><span className="price">$34.50</span> <span className="per">/ 5mos</span></p>
	        		</div>
	        		<div className="img" style={{ backgroundImage: `url(${bg_2})` }}></div>
        			<div className="px-4">
	        			<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        			</div>
        			<p className="button text-center"><a href="#" className="btn btn-secondary px-4 py-3">Take A Course</a></p>
        		</div>
        	</div>
        	<div className="col-md-6 col-lg-3 ">
        		<div className="pricing-entry bg-light active pb-4 text-center">
        			<div>
	        			<h3 className="mb-3">Premium</h3>
	        			<p><span className="price">$54.50</span> <span className="per">/ 5mos</span></p>
	        		</div>
	        		<div className="img" style={{ backgroundImage: `url(${bg_3})` }}></div>
        			<div className="px-4">
	        			<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        			</div>
        			<p className="button text-center"><a href="#" className="btn btn-tertiary px-4 py-3">Take A Course</a></p>
        		</div>
        	</div>
        	<div className="col-md-6 col-lg-3 ">
        		<div className="pricing-entry bg-light pb-4 text-center">
        			<div>
	        			<h3 className="mb-3">Platinum</h3>
	        			<p><span className="price">$89.50</span> <span className="per">/ 5mos</span></p>
	        		</div>
	        		<div className="img" style={{ backgroundImage: `url(${bg_5})` }}></div>
        			<div className="px-4">
	        			<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        			</div>
        			<p className="button text-center"><a href="#" className="btn btn-quarternary px-4 py-3">Take A Course</a></p>
        		</div>
        	</div>
        </div>
    	</div>
        <Footer /> 
        </div>
      );
      
	}
};

     

export default Pricing;

