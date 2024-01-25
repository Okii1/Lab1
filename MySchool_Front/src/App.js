import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp';
import TermsOfService from './TermsOfService';
import Home from './Home';
import CoursesA from './CoursesA';
import Courses from './Courses';
import Teachers from './Teachers';
import TeachersA from './TeachersA';
import Pricing from './Pricing';
import Contact from './Contact';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/Signup' element={<SignUp/>}></Route>
      <Route path='/TermsOfService' element={<TermsOfService/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/CoursesA' element={<CoursesA/>}></Route>
      <Route path='/Courses' element={<Courses/>}></Route>
      <Route path='/TeachersA' element={<TeachersA/>}></Route>
      <Route path='/Teachers' element={<Teachers/>}></Route>
      <Route path='/Pricing' element={<Pricing/>}></Route>
      <Route path='/Contact'element={<Contact/>}></Route>

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
