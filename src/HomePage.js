import React from 'react';
import './HomePage.css';

const HomePage = () => {
  // Static array of testimonials
  const testimonials = [
    { id: 1, text: 'Learnzilla has transformed the way we track student progress. A must-have tool!', author: 'John D.' },
    { id: 2, text: 'As a teacher, Learnzilla has made my job easier and more organized.', author: 'Jane S.' },
    { id: 3, text: 'It’s so easy to monitor my kids’ learning. I love the parent dashboard!', author: 'Mark T.' },
  ];

  return (
    <div className="homepage">
      {/* Background with blur */}
      <div className="background-image"></div>
      <div className="overlay">
        {/* Content Section */}
        <div className="content">
          {/* Mission & Vision Section */}
          <section className="mission-vision">
            <h1>Our Mission</h1>
            <p>Learnzilla is committed to empowering students, teachers, and parents through technology. We believe in fostering growth and knowledge in a supportive community.</p>
            <h1>Our Vision</h1>
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

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What People Say About Learnzilla</h2>
        <div className="testimonial-container">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-box">
              <p>{testimonial.text}</p>
              <h3>- {testimonial.author}</h3>
            </div>
          ))}
        </div>
      </section>

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
          <p>Manage and distribute assignments across the school, creating a unified learning platform for all students.</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
