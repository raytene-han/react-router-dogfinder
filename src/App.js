import './App.css';
import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutesList from './RoutesList';
import Nav from "./Nav";
import axios from 'axios';

const BASE_URL = 'http://localhost:5001/dogs';



function App() {

  const [dogs, setDogs] = useState({data: [], isLoading: true});

  async function getDogs() {
    const response = await axios.get(BASE_URL);
    setDogs({data: response.data, isLoading: false});
  }

  if (dogs.isLoading) {
    getDogs();
    return <h1>Loading dogs...</h1>
  }

  const dogNames = dogs.data.map(dog => dog.name);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogNames={dogNames}/>
        <RoutesList dogList={dogs.data}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
