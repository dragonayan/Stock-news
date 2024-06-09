import React from 'react';
import Header from './components/Header';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';

import './styles.css'


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
        
          <p className="website">www.stocknews.com</p>
          <Header/>
          <img className="download-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAiRQwXf9TTpgIOStvwMpdGBeEQecgottZew&s" />
          <p className="stay-updated">STAY UPDATED</p>
          <p className="paragraph">
           Welcome to the latest news here
          </p>
          
          <HomePage/>
        </div>
        <Footer/>
      </header>
      
    </div>
    
  );
};

export default App;
