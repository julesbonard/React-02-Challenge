import React from 'react';
import './App.css';
import './components/Contact.css';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact className="Contact" 
      avatar="https://randomuser.me/api/portraits/women/79.jpg"
      alt="image profil Priscilla Burke"
      name="Priscilla Burke"
      online
      status="true"
      />
      <Contact className="Contact" 
      avatar="https://randomuser.me/api/portraits/men/79.jpg"
      alt="image profil Shane Warren"
      name="Shane Warren"
      />
      <Contact className="Contact" 
      avatar="https://randomuser.me/api/portraits/women/17.jpg"
      alt="image profil Vicki Watkins"
      name="Vicki Watkins"
      online="true"
      status="true"
      />
    </div>
  );
}

export default App;
