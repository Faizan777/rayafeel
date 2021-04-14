import React, {Component, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import ModalButton from './components/ModalButton';
import Display from './components/display';



function App() {
  return (
    <div>

      
      <ModalButton/>
      <Display/>
      
    </div>
  );
}

export default App;
