import './App.css';
import React from 'react';
import Navbar from './Navbar';
import Product from './Products';
import './Navbar.css'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Product />
    </div>
  );
}

export default App;
