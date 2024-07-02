import { useEffect, useState } from 'react';
import React from 'react';
import './App.css';
import img from './rock.png'

function App() {
  
  let [joke, setJoke] = React.useState('');
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

  let url = 'https://v2.jokeapi.dev/joke/Programming?type=single';
  fetch(url)
      .then(response => response.json())
      .then(data => {
        setJoke(data.joke);
        setIsLoading(false);
      })
      .catch(error => console.error('error:', error));
  }, []);

  if (isLoading) {
    return <div className='loading'>
      <h1>Loading...</h1>
      <p>If this takes too long, refresh the page, or check the logs and contact me at me@smoliicek.xyz</p>
      </div>;
  }

  return (
    <div className='app'>
        <div className="img">
        <p className="speech-bubble">{joke}</p>
        <img src={img} alt="Rock" className="rock"/>
        <p>I am a stone, and I will tell you a joke.</p>
        </div>
    </div>
  );
}

export default App;
