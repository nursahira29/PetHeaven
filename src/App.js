import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import SignUp from './components/SignUp';
import './App.css';
import Adoption from './components/Adoption';
import Release from './components/Release';
import AdoptionGallery from './components/AdoptionGallery';
import home from './home.png'





function App() {

  
  return (
    <>

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/About' element={<About />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/Adoption' element={<Adoption />} />
        <Route path='/Release' element={<Release />} />
        <Route path='/AdoptionGallery' element={<AdoptionGallery />} />


      </Routes>
    </BrowserRouter>
    <section class="sectiontop">
                        <main-img src='/logo.jpeg'/>
    </section>
    <section class="sectionbottom">
                <h1> Promoting Kindness & Preventing Cruelty</h1>
                <br></br>
                <br></br>
                <h1> 2022 At a Glance</h1>
                <img src={home} alt="home" />
                <br></br>
                <br></br>
                <h5> We care for over 80 animals each months. Adopt a companion and help us give animals a second chance </h5>
                <section class="sectionbottomr">
                <p> Step 1: Browse our adoption gallery</p>
                <p> Step 2: Subit the Adoption form and we will revert back to you on the appointment date</p>
                <p> Step 3: Show up for your appointment on time </p>
                </section>
    </section>
            <footer className="footer">
                <p className="text-footer"> Copyright ©-All rights are reserved</p>
            </footer>

            
    </>

    
  );
}
  
export default App;
