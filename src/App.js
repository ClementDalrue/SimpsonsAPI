import './App.css';
import Displaysims from './components/Displaysims';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [sims, setSims] = useState('');
  const getSims = () => {

    // Send the request
  
    axios
  
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
  
      // Extract the DATA from the received response
  
      .then((response) => response.data)
  
      // Use this data to update the state
  
      .then((data) => {
  
        setSims(data[0]);
  
      });
  
  };
  return (
    <>
      <Displaysims sims={sims} />
      <button type="button" onClick={getSims}>Get Sims</button>
      
    </>
  );
}

export default App;
