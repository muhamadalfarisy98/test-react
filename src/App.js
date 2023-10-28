import './App.css';
import React from 'react';
// import { Button, Navbar } from 'flowbite-react';
import Navbar from './Navbar/navbar'
import {Content} from './ContentHome/content'
import { Managedata } from './ManageData/managedata';
import { GlobalProvider } from './Context/globalcontext';

import {BrowserRouter,Route,Routes} from "react-router-dom"

const App = () => {
  
  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <Navbar/>

          {/* routing */}
          <Routes>
            {/* home */}
            <Route path="/" element={<Content/>}/>

            {/* manage data  */}
            <Route path="/manage-data" element={<Managedata/>}/>
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
      
    </>
    
    
  );
}

export default App;
