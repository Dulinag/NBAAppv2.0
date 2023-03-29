import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
<<<<<<< HEAD
import Players from "./Players"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    {
        path: '/',
        element: <App/>
    },
    
    
    {
        path: '/players',
        element: <Players/>
    },
=======
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
    

>>>>>>> 38ec1329095db00250e72e24ff5831569e9023be
);

