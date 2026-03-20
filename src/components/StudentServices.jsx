import React from 'react';
import './StudentServices.css';

const StudentServices = () => {
  const services = [
    { id: 1, title: 'University Results', icon: '🏛️', link: 'https://nmu.ac.in/Student-Corner/Examination/Online-Results-Colleges' },
    { id: 2, title: 'Revaluation Form', icon: '🔍', link: 'https://nmu.ac.in/Student-Corner/Examination/' },
    { id: 3, title: 'Exam Timetable', icon: '📅', link: 'https://nmu.ac.in/Student-Corner/Examination/Exam-Time-Table' },
    { id: 4, title: 'Admission Portal', icon: '📋', link: 'https://nmu.ac.in/en-us/Admissions' },
    { id: 5, title: 'Scholarship Applications', icon: '🎓', link: 'https://mahadbt.maharashtra.gov.in/' },
    { id: 6, title: 'Job Alerts', icon: '💼', link: 'https://nmu.ac.in/en-us/Student-Corner/Placement-Cell' }
  ];

  return (
    <section className="student-services-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Student Services</h2>
          <div className="title-underline"></div>
        </div>
        <div className="services-grid">
          {services.map(service => (
            <a 
              key={service.id} 
              href={service.link} 
              className="service-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="service-icon-wrapper">
                <div className="service-icon">{service.icon}</div>
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <span className="service-link-text">Access Portal →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentServices;
