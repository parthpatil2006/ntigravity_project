import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UploadNotes.css';

const UploadNotes = ({ onAddNote }) => {
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !subject || !file) return;

    // Simulate upload and add note
    onAddNote({ title, subject, file: file.name });
    
    // Redirect to profile
    navigate('/profile');
  };

  return (
    <div className="upload-page">
      <div className="container">
        <div className="upload-card">
          <div className="upload-header">
            <h2>Upload Study Notes</h2>
            <p>Share your knowledge and earn <strong>10 Credit Points</strong> per document!</p>
          </div>
          
          <form className="upload-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Note Title</label>
              <input 
                type="text" 
                placeholder="e.g., Chapter 1: Introduction to Data Structures" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <label>Subject / Course</label>
              <input 
                type="text" 
                placeholder="e.g., Computer Science" 
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>

            <div className="form-group file-upload-group">
              <label>Document (PDF, PPT, DOCX)</label>
              <div className="file-drop-area">
                <span className="file-icon">📁</span>
                <span className="file-msg">{file ? file.name : 'Drag and drop or click to choose file'}</span>
                <input 
                  type="file" 
                  className="file-input" 
                  onChange={(e) => {
                     if(e.target.files[0]) setFile(e.target.files[0]);
                  }}
                  required
                />
              </div>
            </div>

            <button type="submit" className="submit-btn" disabled={!title || !subject || !file}>
              Upload & Earn Points
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadNotes;
