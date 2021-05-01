import React, { useState } from 'react'
import './App.css';

const api = {
  key:'0d08ad399b63fcdcf6ece34e1c2a8c7d',
  base:'https://api.openweathermap.org/data/2.5/'
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const search = input => {
    if(input.key==='Enter'){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => setWeather(result))
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  
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
            <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className='weather-box'>
          <div className='temp'>22°C</div>
          <div className='weather'>Rain</div>
        </div>
     </main>
    </div>
  );
}

export default App;
