import React from "react";
import "./App.css";
import {Routes, Route } from "react-router-dom";
import Chalenges from "./pages/Chalenges";
import Data from "./components/SuscribPremium/Data";
import Sdata from "./components/SuscribStandard/StandardData";
import About from './pages/About';
import Career from './pages/Career';
import Contact from './pages/Contact';
import Cookie from './pages/Cookie';
import Games from "./pages/Games";
import Health from './pages/Health';
import Login from './pages/Login'
import Home from './pages/Home';
import Individual from './pages/Individual';
import Premium from './pages/Premium';
import Privacy from './pages/Privacy';
import Profil from './pages/Profil';
import Resource from './pages/Resource';
import Review from './pages/Review';
import Security from './pages/Security';
import Terms from './pages/Terms';
import Payment from "./pages/Payment";

function App() {
  const { productItems } = Data;
  const { StandardItems } = Sdata;

  return (
    <>
      <>
        <Routes>
          <Route path='/About' element={<About />} />
          <Route path='/Career' element={<Career />} />
          <Route path='/Chalenges' element={<Chalenges shopItems={StandardItems} />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Cookie' element={<Cookie />} />
          <Route path='/Games' element={<Games />} />
          <Route path='/Health' element={<Health />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Individual' element={<Individual />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/' element={<Payment/>}/>
          <Route path='/Privacy' element={<Privacy />} />
          <Route path='/Premium' element={<Premium productItems={productItems} />} />
          <Route path='/Profil' element={<Profil />} />
          <Route path='/Resource' element={<Resource />} />
          <Route path='/Review' element={<Review />} />
          <Route path='/Security' element={<Security />} />
          <Route path='/Terms' element={<Terms />} />
        </Routes>
      </>
    </>
  );
}

export default App;
