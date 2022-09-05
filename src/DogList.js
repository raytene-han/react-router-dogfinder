import React from 'react';
import duke from './duke.jpg';
import perry from './perry.jpg';
import whiskey from './whiskey.jpg';


function DogList({ dogList }) {
  const dogPhotos = [duke, perry, whiskey];

  return (
    <>
      {dogList.map(dog => (
        <div key={dog.name}>
          <h1>{dog.name}</h1>
          <h2>Age: {dog.age}</h2>
          <img src={dog.src} alt={dog.src} />
          <ul>
            {dog.facts.map(fact => <li key={fact}>{fact}</li>)}
          </ul>
        </div>
      ))}
    </>
  );
}

export default DogList;