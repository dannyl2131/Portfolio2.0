import './App.css';
import PortfolioContainer from './components/PortfolioContainer';
import background from './images/Background.jpg';
import React from 'react';



function App() {
  return (
    <div style={{backgroundImage: `url(${background})`}} className="App">
      <PortfolioContainer />
    </div>
  );
}

export default App;
