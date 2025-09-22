import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/common/Layout';
import Home  from './assets/pages/Home';


function App() {
  

  return (
    <>
    
    <Routes>

      
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
       
      </Route>
    </Routes>
    </>
  );
}

export default App;
