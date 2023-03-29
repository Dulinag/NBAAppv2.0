import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
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
);

