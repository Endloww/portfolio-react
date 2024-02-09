import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Parcours from './pages/Parcours';
import Competences from './pages/Competences';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projets' element={<Projects />} />
        <Route path='/competences' element={<Competences />} />
        <Route path='/parcours' element={<Parcours />} />
        {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus  */}
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
