import React from 'react';
import Hero from '../components/Hero';
import QuickActions from '../components/QuickActions';
import StudentServices from '../components/StudentServices';
import StudyMaterials from '../components/StudyMaterials';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <QuickActions />
      <StudentServices />
      <StudyMaterials />
    </div>
  );
};

export default Home;
