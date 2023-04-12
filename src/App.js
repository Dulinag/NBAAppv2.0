import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import playerNames from './playerNames.json';
import styled from 'styled-components';
import playerStats from './playerStats.json';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import PlayerCard from './PlayersCard';
import TitleImage from './nbai2.webp'; 

const DropDownSection = styled.div`
margin: .5rem;
width: 100%;
/* flex-direction: column; */
`

const DropDownInfoSection = styled.div`
width: 90%;
display: flex;
flex-direction: row;
flex-wrap:wrap;
justify-content: space-between;
`
const Image = styled.img`
  width: 50%;
  max-width: 500px;
  margin-top: 2rem;
  display: block;
  margin: auto;
`;



function App() {

  const [players, setPlayers] = useState(playerStats);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [open, setOpen] = useState(false);
  

  const handlePlayerClick = (player) => {
    setSelectedPlayer(player);
  }
  console.log(selectedPlayer)
  return (
    <div className="container">
      
      
      <h1 class="text-center">Hoops For Ballers</h1>

      <Image src={TitleImage} alt="Hoops For Ballers" />

      <h1 className="my-4"></h1>
      
      <div className="row row-cols-2 row-cols-md-3 g-4">
        {playerStats.map((player, index) => {
          let playerInfo = player.data[0]
          // console.log(player.data[0])
        //  player.data[0] === undefined ? console.log(player) : console.log(player.data[0].first_name)
          return ( 
            <>
            {playerInfo !== undefined ? 
       
              <PlayerCard playerInfo={playerInfo} key={index}/>
            : null}
            </>
           
          );
        })}
       </div>
      
      {/* {selectedPlayer && (
        <div className="mt-4">
          <h2>{selectedPlayer}</h2>
          <ul>
            {playerStats.find(stat => stat.name === selectedPlayer) && Object.entries(playerStats.find(stat => stat.name === selectedPlayer)).map(([key, value]) => (
              <li key={key}><strong>{key}: </strong>{value}</li>
            ))}
          </ul>
        </div>
      )} */}
    </div>
  );
}

export default App;