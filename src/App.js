import React from 'react';
import './App.css';
import Navbar from './Navbar'; // Import Navbar component
import HomePage from './HomePage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />  {/* Use Navbar component here */}
        <div className="welcome-section">
          <HomePage />
          {/* Add a button to get started */}
          <button className="cta-button">Get Started</button>
        </div>
      </header>
    </div>
  );
}

export default App;
