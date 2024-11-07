import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <a className="nav-logo" href="/">Learnzilla</a>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
        <div className="welcome-section">
          <h1>Welcome to Learnzilla</h1>
          <p>Empowering students, teachers, and parents in one platform. Learn together, grow together.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </header>
    </div>
  );
}

export default App;
