import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from'../src/Routes/Home.jsx';
import Book from'../src/Routes/Book.jsx';
import Services from'../src/Routes//Services.jsx';
import Touristdestinations from'../src/Routes/Touristdestinations.jsx';
// import React from 'react';



function App() {
  return (
    <div className="App">
  
     <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/book' element={<Book/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path="/tourist-destinations" element={<Touristdestinations />} />

        </Routes>
       
     
     </div>
    );
}

export default App;
