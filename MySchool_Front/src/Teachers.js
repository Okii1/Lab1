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
const Teachers = () => {
  
  const userRoleId = localStorage.getItem('userRoleId');
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const courseImages = [
    courseImage1,
    courseImage2,
    courseImage3,
    courseImage4,
    courseImage5
  ];
  
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
    if (userRoleId == 0 || userRoleId == 1) {
      navigate('/');
    }
    
    axios.get('https://localhost:44361/GetAllTeachers')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('Error fetching Teachers:', error);
      });
  }, [userRoleId]);

  return (
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
				<li className="nav-item "><a href="/Courses" className="nav-link">Courses</a></li>
	        	<li className="nav-item active"><a href="/Teachers" className="nav-link">Teachers</a></li>
	        	<li className="nav-item"><a href="/Pricing" className="nav-link">Pricing</a></li>
	            <li className="nav-item"><a href="/Contact" className="nav-link">Contact</a></li>
				<li className="nav-item"><a href="#" className="nav-link" onClick={handleLogout}>Logout</a></li>
	        </ul>
	      </div>
	    </div>
	  </nav>

 <br></br>
        <div className="container">
				<div className="row">
					<div className="col-md-6 col-lg-3">
						<div className="staff">
							<div className="img-wrap d-flex align-items-stretch">
								<div className="img align-self-stretch" style={{ backgroundImage: `url(${teacher1})` }}></div>
							</div>
							<div className="text pt-3 text-center">
								<h3>Bianca Wilson</h3>
								<span className="position mb-2">Teacher</span>
								<div className="faded">
									<p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                  <ul className="ftco-social text-center">
                    <li className=""><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li className=""><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                    <li className=""><a href="#"><FontAwesomeIcon icon={faGooglePlus} /></a></li>
                    <li className=""><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                  </ul>
              </div>
							</div>
						</div>
					</div>	
          </div>
					</div>
     <Footer /> 
   </div>
     
  );
};

export default Teachers;

