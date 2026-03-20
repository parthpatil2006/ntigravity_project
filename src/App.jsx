import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import UploadNotes from './pages/UploadNotes';
import Profile from './pages/Profile';

// App wide state (Mocking Backend)
function App() {
  const [credits, setCredits] = React.useState(150);
  const [notes, setNotes] = React.useState([
    { id: 1, title: 'Operating Systems Chapter 1', subject: 'CS', date: '2026-03-10' },
    { id: 2, title: 'Data Structures Trees', subject: 'IT', date: '2026-03-15' },
  ]);

  const addNote = (note) => {
    setNotes([...notes, { ...note, id: Date.now(), date: new Date().toISOString().split('T')[0] }]);
    // Add 10 credits for each upload
    setCredits(prev => prev + 10);
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar credits={credits} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upload" element={<UploadNotes onAddNote={addNote} />} />
            <Route path="/profile" element={<Profile credits={credits} notes={notes} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
