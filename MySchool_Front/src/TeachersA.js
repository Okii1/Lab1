import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Login from './Login';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const TeachersA = () => {
  const [showModal, setShowModal] = useState(false);
  const [courses, setCourses] = useState([]);
  const [selectedCourseId, setSelectedCourseId] = useState('');
  const [newTeacher, setNewTeacher] = useState({
    Id:0,
    Name: '',
    Surname:'',
    Description: '',
    CourseId: 0  
  });

    useEffect(() => {
      fetchCourses();
    }, []);

    const fetchCourses = async () => {
      try {
        const response = await fetch('https://localhost:44361/api/Courses/GetAllCourses');
        const data = await response.json();
        setCourses(data); 
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    const handleSelectChange = (event) => {
      setSelectedCourseId(event.target.value);
      setNewTeacher({
        ...newTeacher,
        CourseId: event.target.value
      });
    };

  const handleInputChange = (e) => {
  const { name, value } = e.target;
  setNewTeacher((prevTeacher) => ({
    ...prevTeacher,
    [name]: value,
    
  }));
};
const handleModal = () => {
  setNewTeacher({
    Id: 0,
    Name: '',
    Surname: '',
    Description: '',
    CourseId: 0
  });

  setSelectedCourseId('');
  setShowModal(!showModal);
  
};

const handleSaveTeacher = async () => {
  console.log("ID: "+newTeacher.Id);
  if (!newTeacher.Name) {
    alert("Please fill in all required fields.");
    return;
  }
  try {
    if (newTeacher.Id==0) {
      const response = await axios.post('https://localhost:44361/api/Teachers/AddTeachers', {
        Name: newTeacher.Name,
        Surname: newTeacher.Surname,
        Description: newTeacher.Description,
        CourseId:selectedCourseId,
        
      });
      console.log('New Teacher added:', response.data);
      window.location.reload();


    } else {
      await axios.put(`https://localhost:44361/api/Teachers/UpdateTeachers`, {
        Id: newTeacher.Id,
        Name: newTeacher.Name,
        Surname: newTeacher.Surname,
        Description: newTeacher.Description,
        CourseId: selectedCourseId
     
      });
      console.log('Teacher updated:', newTeacher.id);
      window.location.reload();

    }
    
    setShowModal(false);
  } catch (error) {
    console.error('Error saving Teacher:', error);
  }
};
  const userRoleId = localStorage.getItem('userRoleId');
  const navigate = useNavigate();
  const [Teachers, setTeachers] = useState([]);
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
    axios.get('https://localhost:44361/api/Teachers/GetAllTeachers')
      .then(response => {
        setTeachers(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error fetching Teachers:', error);
      });
  }, []); 
  const handleDelete = async (TeacherId) => {
    try {
      await axios.delete(`https://localhost:44361/api/Teachers/DeleteTeachers/${TeacherId}`);
      setTeachers((prevTeachers) => prevTeachers.filter(Teacher => Teacher.id !== TeacherId));
    } catch (error) {
      console.error(`Error deleting Teacher with ID ${TeacherId}:`, error);
    }
  };
  const handleEdit = async (TeacherId) => {
    const selectedTeacher = Teachers.find(Teacher => Teacher.id === TeacherId);
    
    console.log("selectedTeacher:", selectedTeacher);
    setNewTeacher({
      Id: selectedTeacher.id,
      Name: selectedTeacher.name,
      Surname: selectedTeacher.surname,
      Description: selectedTeacher.description,
      CourseId: selectedTeacher.courseId
    
    });
    setSelectedCourseId(selectedTeacher.courseId); 
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
    <Button variant="primary" onClick={handleModal}style={{ marginLeft: "40px" }}>
      Add Teacher
    </Button>
    <table className="table" style={{ margin: "40px" }}>
        <thead>
          <tr>
           <th>Id</th>
           <th>Name</th>
           <th>Surname</th>
           <th>Description</th>
           <th>Course</th>
          </tr>
        </thead>
        <tbody>
          {Teachers.map(Teacher => (
              <tr key={Teacher.id}>
              <td>{Teacher.id}</td>
              <td>{Teacher.name}</td>
              <td>{Teacher.surname}</td>
              <td>{Teacher.description}</td>
              {courses.map(course => {
              if (course.id === Teacher.courseId) {
                return <td key={course.id}>{course.name}</td>;
              } 
              })}
             <Button variant="warning"  onClick={() => handleEdit(Teacher.id)} style={{ marginRight: "15px" }}>
               Edit
             </Button>
              <Button variant="danger"  onClick={() => handleDelete(Teacher.id)} style={{ marginLeft: "" }}>
              Delete
            </Button>
            </tr>
          ))}
        </tbody>
      </table>
     <Footer /> 
     <Modal show={showModal} onHide={handleModal}>
      <Modal.Header closeButton>
      <Modal.Title>{newTeacher.Id ? 'Edit Teacher' : 'Add Teacher'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
  <input type="text" name="Id" value={newTeacher.Id} onChange={handleInputChange} hidden/>
  <label>Name:</label><br/>
  <input type="text" name="Name" value={newTeacher.Name} onChange={handleInputChange}/><br/>
  <label>Surname:</label><br/>
  <input type="text" name="Surname" value={newTeacher.Surname} onChange={handleInputChange}/><br/>
  <label>Description:</label><br/>
  <input type="text" name="Description" value={newTeacher.Description} onChange={handleInputChange}/><br/>
  <label>Course:</label><br/>
      <select name="Course" value={selectedCourseId} onChange={handleSelectChange}>
        <option value="">Select a Course</option>
        {courses.map(course => (
          <option key={course.id} value={course.id}>{course.name}</option>
        ))}
      </select><br/>
   
 </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSaveTeacher}>
          Save Teacher
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  );
};

export default TeachersA;

