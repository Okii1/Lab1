import React from 'react';
import Home from './Home';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
	var userRoleId = localStorage.getItem('userRoleId');
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
  if(userRoleId == 1)
{
return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ftco_navbar ftco-navbar-light" id="ftco-navbar">
	    <div className="container d-flex align-items-center">
	    	<a className="navbar-brand" href="/Home">MySchool</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="oi oi-menu"></span> Menu
	      </button>
	      <div className="collapse navbar-collapse" id="ftco-nav">
	        <ul className="navbar-nav ml-auto">
	        	<li className="nav-item active"><a href="/Home" className="nav-link pl-0">Home</a></li>
				<li className="nav-item"><a href="/CoursesA" className="nav-link">Courses</a></li>
	        	<li className="nav-item"><a href="/TeachersA" className="nav-link">Teachers</a></li>
	        	<li className="nav-item"><a href="/Pricing" className="nav-link">Pricing</a></li>
	            <li className="nav-item"><a href="/Contact" className="nav-link">Contact</a></li>
				<li className="nav-item"><a href="#" className="nav-link" onClick={handleLogout}>Logout</a></li>
	        </ul>
	      </div>
	    </div>
	  </nav>
);

}
else if(userRoleId == 2){
	return(
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark ftco_navbar ftco-navbar-light" id="ftco-navbar">
			<div className="container d-flex align-items-center">
				<a className="navbar-brand" href="/Home">MySchool</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
				<span className="oi oi-menu"></span> Menu
			  </button>
			  <div className="collapse navbar-collapse" id="ftco-nav">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item active"><a href="/Home" className="nav-link pl-0">Home</a></li>
					<li className="nav-item"><a href="/Courses" className="nav-link">Courses</a></li>
					<li className="nav-item"><a href="/Teachers" className="nav-link">Teachers</a></li>
					<li className="nav-item"><a href="/Pricing" className="nav-link">Pricing</a></li>
					<li className="nav-item"><a href="/Contact" className="nav-link">Contact</a></li>
					<li className="nav-item"><a href="#" className="nav-link" onClick={handleLogout}>Logout</a></li>
				</ul>
			  </div>
			</div>
		  </nav>
	);
	
	}
};
export default Navbar;
