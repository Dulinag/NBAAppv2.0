import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import playerStats from './playerStats.json';
import styled from 'styled-components';

import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import axios from 'axios';

import Card from 'react-bootstrap/Card';


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
const Stye1 = styled.div`
text-allign: center;
color:blue;
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



// React.useEffect(() =>{


//     fetchApi();
// },[]


//)





          return ( 
            <>
          {/* <div className="col" >
          <div className="card" >
            <div className="card-body">
              
              <Link to={`/${playerInfo.id}`}>
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
        </div> */}

        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{playerInfo.first_name + ' ' + playerInfo.last_name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{playerInfo.team.full_name}</Card.Subtitle>
        <Card.Text>
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
          
        </Card.Text>
        
      </Card.Body>
    </Card>
    
            </>
           
          );
        }
      
    



export default PlayerCard;