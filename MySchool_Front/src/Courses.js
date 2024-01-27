import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import bg_courses from './images/courses.webp';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import courseImage1 from './images/course-1.jpg';
import courseImage2 from './images/course-2.jpg';
import courseImage3 from './images/course-3.jpg';
import courseImage4 from './images/course-4.jpg';
import courseImage5 from './images/course-5.jpg';


const Courses = () => {
  
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
    
    axios.get('https://localhost:44361/GetAllCourses')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
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
				<li className="nav-item active"><a href="/Courses" className="nav-link">Courses</a></li>
	        	<li className="nav-item"><a href="/Teachers" className="nav-link">Teachers</a></li>
	        	<li className="nav-item"><a href="/Pricing" className="nav-link">Pricing</a></li>
	            <li className="nav-item"><a href="/Contact" className="nav-link">Contact</a></li>
				<li className="nav-item"><a href="#" className="nav-link" onClick={handleLogout}>Logout</a></li>
	        </ul>
	      </div>
	    </div>
	  </nav>
   
    <Carousel fade>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={bg_courses}
        alt="" style={{height:'700px'}}
      />
        <Carousel.Caption style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%',backgroundColor: 'transparent' }}>
        <h1 style={{color:'white',fontSize:'50px', textAlign:'center' ,fontWeight:'bold'}}>Our Courses</h1>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
 <br></br>
  <div class="container">
      <div class="row">
      {courses.map((course, index) => (
        <div key={course.id} className="col-md-6 course d-lg-flex">
        <div className="img" style={{ backgroundImage: `url(${courseImages[index]})` }}></div>
          <div className="text bg-light p-4">
            <h3><a href="#">{course.name}</a></h3>
            <p className="subheading"><span>Class time:</span> {new Date(course.startTime).toLocaleTimeString()} - {new Date(course.endTime).toLocaleTimeString()}</p>
            <p>{course.description}</p>
          </div>
        </div>
      ))}
        </div>
        </div>
     <Footer /> 
   </div>
     
  );
};

export default Courses;

