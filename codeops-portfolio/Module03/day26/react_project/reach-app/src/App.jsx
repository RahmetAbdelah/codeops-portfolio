import React from 'react'
// import {useState} from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Header from './components/Header/Header'
import Mains from './components/Main/Mains'
import Footer from './components/Footer/Footer'
// import State from './components/state';
function App() {

  return (
<div>
  {/* < State /> */}
  <Header/>
  <Mains />
  <Footer />

</div>
    
  );
}


export default App;
