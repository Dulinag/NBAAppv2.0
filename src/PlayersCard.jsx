import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import playerStats from './playerStats.json';
import styled from 'styled-components';

import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';




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

function PlayerCard({playerInfo}) {

   

  const [players, setPlayers] = useState(playerStats);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [open, setOpen] = useState(false);

console.log(playerInfo)
  const handlePlayerClick = (player) => {
    setSelectedPlayer(player);
  }
  console.log(selectedPlayer)
          return ( 
            <>
          <div className="col" >
          <div className="card" >
            <div className="card-body">
              
              <Link to="/player-card">
                <h5 className="card-title">{playerInfo.first_name + ' ' + playerInfo.last_name}</h5> 
              </Link>
              <p className="card-text">{playerInfo.team.full_name} </p>

                  <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            More Info
          </Button>
          <Collapse in={open}>
            <div id="example-collapse-text">

                <div>
            {playerInfo.first_name} {playerInfo.last_name}

            </div>

            <div>

            Height: {playerInfo.height_feet} {playerInfo.height_inches}

            </div>

            <div>

                Weight: {playerInfo.weight_pounds} 

            </div>

            <div>
                Position: {playerInfo.position}
            </div>
            <div>
                Team: {playerInfo.team.full_name}
            </div>
            
            Conference: {playerInfo.team.conference}

            <div>

            </div>
            
            
            </div>
          </Collapse>
             
            </div>
          </div>
        </div>
    
            </>
           
          );
        }
      
    



export default PlayerCard;