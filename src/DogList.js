import React from 'react';

function DogList({ dogList }) {

  return (
    <>
      {dogList.map(dog => (
        <div key={dog.name}>
          <h1>{dog.name}</h1>
          <h2>Age: {dog.age}</h2>
          <img src={`/${dog.src}.jpg`} alt={dog.src} />
          <ul>
            {dog.facts.map(fact => <li key={fact}>{fact}</li>)}
          </ul>
        </div>
      ))}
    </>
  );
}

export default DogList;