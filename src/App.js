import './App.css';
import React from "react";

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './assignment-4/Home';
import Students from './assignment-4/Students';
import Contact from './assignment-4/Contact';
import Navbar from './assignment-4/Navbar';
import CreateNew from './assignment-4/CreateNew';
function App() {
  
  return (
    <div className="App">
     {/* <BrowserRouter>
     <TableData/>
     <Routes>
      <Route path='/table' element={<StudentForm/>}/>
     </Routes>
     </BrowserRouter> */}

<BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/student" element={<Students/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path='/student-new' element={<CreateNew/>}/>
      </Routes>
      </BrowserRouter>
     </div>
  );
}

export default App;
