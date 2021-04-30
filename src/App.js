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
     </main>
    </div>
  );
}

export default App;
