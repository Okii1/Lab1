import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Login from './Login';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const CoursesA = () => {
  const [showModal, setShowModal] = useState(false);
  const [newCourse, setNewCourse] = useState({
    Id:0,
    Name: '',
    Description: '',
    StartTime: '', 
    EndTime: '', 
  });
  
const handleInputChange = (e) => {
  const { name, value } = e.target;
  setNewCourse((prevCourse) => ({
    ...prevCourse,
    [name]: value,
    
  }));
};
const handleModal = () => {
  setShowModal(!showModal);
};
const handleSaveCourse = async () => {
  console.log("ID: "+newCourse.Id);
  if (!newCourse.Name) {
    alert("Please fill in all required fields.");
    return;
  }
  try {
    if (newCourse.Id==0) {
      const response = await axios.post('https://localhost:44361/api/Courses/AddCourses', {
        Name: newCourse.Name,
        Description: newCourse.Description,
        StartTime: newCourse.StartTime,
        EndTime: newCourse.EndTime
      });
      console.log('New course added:', response.data);
      window.location.reload();


    } else {
      await axios.put(`https://localhost:44361/api/Courses/UpdateCourse`, {
        Id: newCourse.Id,
        Name: newCourse.Name,
        Description: newCourse.Description,
        StartTime: newCourse.StartTime,
        EndTime: newCourse.EndTime
      });
      console.log('Course updated:', newCourse.id);
      window.location.reload();

    }
    
    setShowModal(false);
  } catch (error) {
    console.error('Error saving course:', error);
  }
};
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
    axios.get('https://localhost:44361/api/Courses/GetAllCourses')
      .then(response => {
        setCourses(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  }, []); 
  const handleDelete = async (courseId) => {
    try {
      await axios.delete(`https://localhost:44361/api/Courses/DeleteCourse/${courseId}`);
      setCourses((prevCourses) => prevCourses.filter(course => course.id !== courseId));
    } catch (error) {
      console.error(`Error deleting course with ID ${courseId}:`, error);
    }
  };
  const handleEdit = async (courseId) => {
    const selectedCourse = courses.find(course => course.id === courseId);
    console.log("selectedCourse:", selectedCourse);
    setNewCourse({
      Id: selectedCourse.id,
      Name: selectedCourse.name,
      Description: selectedCourse.description,
      StartTime: selectedCourse.startTime,
      EndTime: selectedCourse.endTime
    });
  setShowModal(true);
  };
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
			    	<li className="nav-item active"><a href="/CoursesA" className="nav-link">Courses</a></li>
	        	<li className="nav-item"><a href="/TeachersA" className="nav-link">Teachers</a></li>
	        	<li className="nav-item"><a href="/Pricing" className="nav-link">Pricing</a></li>
	          <li className="nav-item"><a href="/Contact" className="nav-link">Contact</a></li>
			    	<li className="nav-item"><a href="#" className="nav-link" onClick={handleLogout}>Logout</a></li>
	        </ul>
	      </div>
	    </div>
	  </nav>
    <h4 style={{ margin: "40px" }}>All Courses</h4>
    <Button variant="primary" onClick={handleModal}style={{ marginLeft: "40px" }}>
      Add Course
    </Button>
    <table className="table" style={{ margin: "40px" }}>
        <thead>
          <tr>
           <th>Id</th>
           <th>Name</th>
           <th>Description</th>
           <th>StartTime</th>
           <th>EndTime</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
              <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.name}</td>
              <td>{course.description}</td>
              <td>{course.startTime}</td>
             <td>{course.endTime}</td>
             <Button variant="warning"  onClick={() => handleEdit(course.id)} style={{ marginRight: "15px" }}>
               Edit
             </Button>
              <Button variant="danger"  onClick={() => handleDelete(course.id)} style={{ marginLeft: "" }}>
              Delete
            </Button>
            </tr>
          ))}
        </tbody>
      </table>
     <Footer /> 
     <Modal show={showModal} onHide={handleModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add Course</Modal.Title>
      </Modal.Header>
      <Modal.Body>
  <input type="text" name="Id" value={newCourse.Id} onChange={handleInputChange} hidden/>
  <label>Name:</label><br/>
  <input type="text" name="Name" value={newCourse.Name} onChange={handleInputChange}/><br/>
  <label>Description:</label><br/>
  <input type="text" name="Description" value={newCourse.Description} onChange={handleInputChange}/><br/>
  <label>StartTime:</label><br/>
  <input type="time" name="StartTime" value={newCourse.StartTime} onChange={handleInputChange}/><br/>
  <label>EndTime:</label><br/>
  <input type="time" name="EndTime" value={newCourse.EndTime} onChange={handleInputChange}/><br/>
 </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSaveCourse}>
          Save Course
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  );
};

export default CoursesA;

