import React, { useState } from 'react';
import playerNames from './playerNames.json';

import playerStats from './playerStats.json';

import 'bootstrap/dist/css/bootstrap.css';

function App() {

  const [players, setPlayers] = useState(playerNames);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handlePlayerClick = (player) => {

    setSelectedPlayer(player);
  }

  return (
    <div className="container">
      <h1 className="my-4">List of NBA Players</h1>
      
      <div className="row row-cols-2 row-cols-md-3 g-4">
        {players.map((player, index) => {
          const playerStat = playerStats.find(stat => stat.name === player);
          const pointsPerGame = playerStat ? playerStat.pointsPerGame : null;

          return (
            <div className="col" key={index}>

              <div className="card" onClick={() => handlePlayerClick(player)}>
                <div className="card-body">

                  <h5 className="card-title">{player}</h5>
                  {pointsPerGame && <p className="card-text">Points per game: {pointsPerGame}</p>}
                </div>



              </div>
            </div>
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