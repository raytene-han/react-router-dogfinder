import {Route, Routes, Navigate} from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';

function RoutesList({ dogList }) {
  return (
    <Routes>
      <Route element= { <DogList dogList={dogList}/>} path="/dogs" />
      <Route element= { <DogDetails dogList={dogList}/>} path="/dogs/:name" />
      <Route element= { <Navigate to="/dogs" />} path="*" />
    </Routes>
  );
}

export default RoutesList;