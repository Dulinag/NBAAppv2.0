import React, { useState } from 'react';
import playerNames from './playerNames.json';

import playerStats from './playerStats.json';

import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';


const RowContainer = styled.div`
  text-decoration: none;
  color: black;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  outline: none;
  font-size: 15px;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: lightblue;

  
  margin: auto;
`

function Players() {

    const [players, setPlayers] = useState(playerStats);
    const [selectedPlayer, setSelectedPlayer] = useState(null);
  
    const handlePlayerClick = (player) => {
  
      setSelectedPlayer(player);
    }
    console.log(playerStats)
    return (



        <>
        
        
        
        <RowContainer>
          <div className="container mt-4">

            <h1>{playerStats.data[0].first_name} {playerStats.data[0].last_name}</h1>

            <h4>Position: {playerStats.data[0].position}</h4>

            <h4>Team: {playerStats.data[0].team.full_name}</h4>
            
          </div>


        </RowContainer>
        
        
        
        
        </>


    );

}

export default Players;
