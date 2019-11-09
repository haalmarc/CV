import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Infobox from './components/Infobox';

function App() {
  return (
    <div className="container">
      <Header />
      <h1>
        Min CV
      </h1>
      <Infobox 
        job="Frontendutvikler ved Accenture"
        date="08.2021 - 08.2023"
        jobdesc="TestLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ing"
      />
      <Infobox 
        job="IT-utvikler ved studentmediene"
        date="08.2019 - 08.2021"
        jobdesc="TestLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ing"
      />
      <Footer />
    </div>
  );
}

export default App;
