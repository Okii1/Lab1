import React , { useState }from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleLogin = () => {
      console.log('Email:', email);
      console.log('Password:', password);
      const data ={
        Email: email,
        Password:password,
      
      };
      const url='https://localhost:44361/api/Account/Login';
      axios.post(url,data).then((result)=>{
        console.log(result);
        const [message, userRoleId] = result.data.split(';');

        if (userRoleId) {
          localStorage.setItem('userRoleId', userRoleId);

            if (parseInt(userRoleId) === 1) {
            
                navigate('/Home');
            } else if (parseInt(userRoleId) === 2) {
                
                navigate('/Home');
            } else {
            
                alert('Unknown role or scenario');
            }
        } else {
            alert('Unknown role or scenario');
        }
      }).catch((error)=>{
        alert(error);
      });
    };
  
    return (
      <div className="container vh-100" style={{ backgroundColor: '#ffff' }}>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: '25px' }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>
                    <form className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="email">Email</label>
                          <input
                            type="email"
                            id="email"
                            className="form-control"
                            value={email}
                            onChange={handleEmailChange}
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="password">Password</label>
                          <input
                            type="password"
                            id="password"
                            className="form-control"
                            value={password}
                            onChange={handlePasswordChange}
                          />
                        </div>
                      </div>
                      <div className="form-check d-flex justify-content-center mb-4">
                        <label className="form-check-label" htmlFor="registerLink">
                          Not a member? <a href="/Signup" id="registerLink">Register</a>
                        </label>
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="button" className="btn btn-primary" onClick={handleLogin}>
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  

export default Login;