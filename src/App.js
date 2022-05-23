import React from 'react';
import { Route , Routes } from 'react-router-dom';

import Register from './components/register/Register';
import './App.css';
import ExampleLoader from './components/Examples/ExampleLoader';

function App() {
  return (
    <>
    {/* <ExampleLoader/> */}  {/* lo comente porque me aparece un ""Charge complete!" en el front de Register.jsx */}
    <Routes>
      <Route path='/register' element= {<Register/>} />
    </Routes>
    </>
  );
}

export default App;
