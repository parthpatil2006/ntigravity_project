import React from 'react';
import './QuickActions.css';

const QuickActions = () => {
  const actions = [
    { id: 1, title: 'Check Results', icon: '📋', color: '#4CAF50', link: 'https://nmu.ac.in/Student-Corner/Examination/Online-Results-Colleges' },
    { id: 2, title: 'Exam Form', icon: '📝', color: '#2196F3', link: 'https://nmu.ac.in/Student-Corner/Examination/' },
    { id: 3, title: 'Hall Ticket', icon: '🎫', color: '#FF9800', link: 'https://nmu.ac.in/Student-Corner/Examination/' },
    { id: 4, title: 'Scholarship Info', icon: '🎓', color: '#F44336', link: 'https://mahadbt.maharashtra.gov.in/' },
    { id: 5, title: 'Study Notes', icon: '📚', color: '#9C27B0', link: 'https://nmu.ac.in/en-us/Student-Corner/Study-Material' }
  ];

  return (
    <section className="quick-actions-section">
      <div className="container">
        <div className="quick-actions-grid">
          {actions.map(action => (
            <a 
              key={action.id} 
              href={action.link} 
              className="quick-action-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div 
                className="quick-icon" 
                style={{ background: `linear-gradient(135deg, ${action.color}99 0%, ${action.color} 100%)` }}
              >
                {action.icon}
              </div>
              <h3>{action.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickActions;
