import { useRoutes } from "react-router-dom";
import * as React from 'react';
import App from "../src/App";
import Player from "../src/Players"

const MainRoutes = () => {
    // Check if user is currently logged in, if not redirect to login page
    return useRoutes([
       
        {
            path: '/',
            // Important: If user is not logged in, redirect to Login page
            element: <App/>
        },
        {
            path: '/:id',
            element: <Player/> 
        }
    ])
}
 
export default MainRoutes;