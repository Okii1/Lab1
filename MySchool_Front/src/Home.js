import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import Navbar from './Navbar';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

function Home() {
  const userRoleId = localStorage.getItem('userRoleId');
  const navigate = useNavigate();

  useEffect(() => {
    console.log(userRoleId);
    if (userRoleId == 0) {
      navigate('/');
    }
  }, [userRoleId, navigate]);
  
  if (userRoleId === 0) {
    return (
      <div>
        <p>You do not have access to this page. Please log in.</p>
        <Login />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Navbar />
      <Body />
      <Footer />
     
    </div>
  );
}

export default Home;
