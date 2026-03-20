import React from 'react';
import './Profile.css';

const Profile = ({ credits, notes }) => {
  return (
    <div className="profile-page">
      <div className="container">
        
        <div className="profile-header">
          <div className="profile-info">
             <div className="avatar">👤</div>
             <div>
               <h2>Student Profile</h2>
               <p className="student-id">ID: KBCNMU-2026-0491</p>
             </div>
          </div>
          <div className="credit-badge">
            <span className="credit-value">{credits}</span>
            <span className="credit-label">Credit Points</span>
          </div>
        </div>

        <div className="profile-content">
          <div className="notes-section">
            <div className="section-title-bar">
              <h3>My Uploaded Notes ({notes.length})</h3>
            </div>
            
            {notes.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">📝</div>
                <p>You haven't uploaded any notes yet. Share your knowledge to earn credits!</p>
              </div>
            ) : (
              <div className="notes-list">
                {notes.map(note => (
                  <div key={note.id} className="note-item">
                    <div className="note-icon">📄</div>
                    <div className="note-details">
                      <h4>{note.title}</h4>
                      <p>Subject: {note.subject}</p>
                    </div>
                    <div className="note-meta">
                      <span className="note-date">{note.date}</span>
                      <span className="earned-badge">+10 pts</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="rewards-section">
             <div className="section-title-bar">
              <h3>Available Rewards</h3>
            </div>
            <div className="rewards-grid">
               <div className="reward-card locked">
                  <div className="reward-cost">500 pts</div>
                  <h4>Premium Study Material Access</h4>
                  <p>Unlock exclusive university notes for 1 semester.</p>
               </div>
               <div className="reward-card locked">
                  <div className="reward-cost">1000 pts</div>
                  <h4>Exam Fee Discount</h4>
                  <p>Get a 10% discount on your next semester exam form.</p>
               </div>
               <div className="reward-card locked">
                  <div className="reward-cost">2000 pts</div>
                  <h4>Campus Cafe Voucher</h4>
                  <p>₹200 voucher for the university cafeteria.</p>
               </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
