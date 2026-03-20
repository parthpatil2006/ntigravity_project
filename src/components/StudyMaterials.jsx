import React from 'react';
import './StudyMaterials.css';

const StudyMaterials = () => {
  const materialsTop = [
    { id: 1, title: 'Important Questions', icon: '❓', link: 'https://kbcnmu.ac.in/download/questions' },
    { id: 2, title: 'Previous Year Papers', icon: '📄', link: 'https://kbcnmu.ac.in/download/papers' },
    { id: 3, title: 'Short Notes', icon: '📝', link: 'https://kbcnmu.ac.in/download/notes' },
    { id: 4, title: 'PPT Templates', icon: '📊', link: 'https://kbcnmu.ac.in/download/ppt' }
  ];

  return (
    <div className="study-materials-wrapper">
        <section className="study-materials-section">
        <div className="container">
            <h2 className="section-title">Study Materials</h2>
            <div className="materials-grid">
            {materialsTop.map(material => (
                <div key={material.id} className="material-card">
                <div className="material-icon">{material.icon}</div>
                <h3>{material.title}</h3>
                <a href={material.link} target="_blank" rel="noopener noreferrer" className="download-btn">Download</a>
                </div>
            ))}
            </div>
        </div>
        </section>
        <section className="study-materials-section-bottom">
        <div className="container">
            <div className="materials-grid alt-grid">
            {materialsTop.map(material => (
                <div key={`bottom-${material.id}`} className="material-card alt-card">
                <div className="material-icon alt-icon">{material.icon}</div>
                <h3>{material.title.split(' ').map((word, i) => <React.Fragment key={i}>{word}<br/></React.Fragment>)}</h3>
                <a href={material.link} target="_blank" rel="noopener noreferrer" className="download-btn alt-btn">Download</a>
                </div>
            ))}
            </div>
        </div>
        </section>
    </div>
  );
};

export default StudyMaterials;
