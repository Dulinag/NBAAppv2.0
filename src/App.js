import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import playerNames from './playerNames.json';
import { useParams } from 'react-router-dom';
import playerStats from './playerStats.json';

import 'bootstrap/dist/css/bootstrap.css';

function App() {

  const [players, setPlayers] = useState(playerStats);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handlePlayerClick = (player) => {
    console.log(player)
    setSelectedPlayer(player);
  }
  // console.log(playerStats)
  return (
    <div className="container">
      <h1 className="my-4">List of NBA Players</h1>
      
      <div className="row row-cols-2 row-cols-md-3 g-4">
        {playerStats.map((player, index) => {
          let playerInfo = player.data[0]
          // console.log(player.data[0])
        //  player.data[0] === undefined ? console.log(player) : console.log(player.data[0].first_name)
          return ( 
            <>
            {playerInfo !== undefined ? 
<<<<<<< HEAD
          <div className="col" key={index}>
          <div className="card" onClick={() => handlePlayerClick(player)}>
            <div className="card-body">
              <h5 className="card-title">{playerInfo.first_name + ' ' + playerInfo.last_name}</h5> 
              <Link to="/Players"></Link>
              <p className="card-text">{playerInfo.team.full_name} </p>
=======
            <div className="col" key={playerInfo.id}>
             
              <div className="card" onClick={() => handlePlayerClick(playerInfo.id)}>
             
                <div className="card-body">

                  <h5 className="card-title">{playerInfo.first_name + ' ' + playerInfo.last_name}</h5> 
                  <p className="card-text">{playerInfo.team.full_name} </p>

                </div> 
               
              </div>  
>>>>>>> 38ec1329095db00250e72e24ff5831569e9023be
            </div>
          </div>
        </div>
        
            : null}
            </>
           
          );
        })}
      </div>
      
      {selectedPlayer && (
        <div className="mt-4">
          <h2>{selectedPlayer}</h2>
          <ul>
            {playerStats.find(stat => stat.name === selectedPlayer) && Object.entries(playerStats.find(stat => stat.name === selectedPlayer)).map(([key, value]) => (
              <li key={key}><strong>{key}: </strong>{value}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;