import React from 'react';
import './HomePage.css'; // Ensure corresponding CSS for styles

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Background with blur */}
      <div className="background-image">
        <div className="overlay">
          <div className="content">
            {/* Mission & Vision Section */}
            <section className="mission-vision">
              <h1>Our Mission</h1>
              <p>Learnzilla is committed to empowering students, teachers, and parents through technology. We believe in fostering growth and knowledge in a supportive community.</p>
              <h2>Our Vision</h2>
              <p>We envision a world where education is accessible, impactful, and tailored to individual needs, creating lifelong learners.</p>
            </section>

            {/* Sign up/Login */}
            <section className="auth-section">
              <h2>Join Learnzilla</h2>
              <button className="cta-button">Sign Up</button>
              <button className="cta-button">Login</button>
            </section>
          </div>
        </div>
      </div>

      {/* Photos Section */}
      <section className="photo-section">
        <div className="photo-container">
          <img src="student-image.jpg" alt="Student" className="round-photo" />
          <img src="teacher-image.jpg" alt="Teacher" className="round-photo" />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <h2 className="benefits-heading">Benefits of Learnzilla</h2>
        <div className="benefit-container">
          <h3>Students</h3>
          <p>Access your assignments, track progress, and get personalized learning materials.</p>
        </div>
        <div className="benefit-container">
          <h3>Teachers</h3>
          <p>Effortlessly upload and manage assignments, track student progress, and communicate with parents.</p>
        </div>
        <div className="benefit-container">
          <h3>Parents</h3>
          <p>Monitor your child's progress, communicate with teachers, and stay informed about assignments.</p>
        </div>
        <div className="benefit-container">
          <h3>Schools</h3>
          <p>Manage and distribute assignments across the school, create a unified learning platform for all students.</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
