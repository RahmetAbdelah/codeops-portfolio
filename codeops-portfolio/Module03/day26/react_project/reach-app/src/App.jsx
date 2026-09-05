import React from 'react'
import './App.css'

import { CartProvider } from './cart/CartProvider'
import Navbar from './components/Navbar'
import Header from './components/Header/Header'
import Mains from './components/Main/Mains'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <CartProvider>
      <div>
        <Header />
        <Mains />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;