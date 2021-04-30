import React from 'react'
import './App.css';

const api = {
  key:'0d08ad399b63fcdcf6ece34e1c2a8c7d',
  base:'https://api.openweathermap.org/data/2.5/'
}

function App() {
  return (
    <div className="app">
     <main>
       <div className='search-box'>
          <input
            type='text'
            className='search-bar'
            placeholder='Search Place...'
          />
       </div>
       <div className="location-box">
            <div className='title'>Harvey's Weather App</div>
            <div className="location">New York</div>
            <div className="date">11/2/2021</div>
        </div>
        <div className='weather-box'>
          <div className='temp'>22°C</div>
          <div className='weather'>Sunny</div>
        </div>
     </main>
    </div>
  );
}

export default App;
