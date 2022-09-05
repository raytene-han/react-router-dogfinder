import React from 'react';
import { useParams } from 'react-router-dom';
import {Navigate} from 'react-router-dom';
import NotFound from './NotFound';

function DogDetails({ dogList }) {
  const { name } = useParams();
  const dog = dogList.filter(dog => dog.name === name)[0];
  if(!dog) {
    return <NotFound err={`${name} not found!`}/>
  }
  // return <Navigate to="/dogs" />

  return (
    <>
      <h1>{dog.name}</h1>
      <h2>Age: {dog.age}</h2>
      <img src={`/${dog.src}.jpg`} alt={dog.src} />
      <ul>
        {dog.facts.map(fact => <li key={fact}>{fact}</li>)}
      </ul>
    </>
  )
}

export default DogDetails;