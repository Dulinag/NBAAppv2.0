import React, { useState } from 'react';
import playerNames from './playerNames.json';

import playerStats from './playerStats.json';

import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from 'axios';


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
const api = axios.create({baseURL: `https://www.balldontlie.io/api/v1/`})

function Players(playerInfo) {

  const {id} = useParams()
  console.log(id)

    const [players, setPlayers] = useState(playerStats);
    const [selectedPlayer, setSelectedPlayer] = useState(null);
  
    const handlePlayerClick = (player) => {
  
      setSelectedPlayer(player);
    }
    console.log(playerStats)


    const fetchApi = async () => {


      await api.get(`season_averages?&player_ids[]={${id}}`, null,)
  
      .then((res)=>{ 
          console.log(res)
  
      })
      .catch((err)=>{
          console.log(err)
      })
    }
  
  // React.useEffect(() =>{
  
  
  //     fetchApi();
  // },[]
  
  
  //)
    return (

        
        <RowContainer>
          <div className="container mt-4">

            <h1>First Name Last Name</h1>

            <h4>Position: PG</h4>

            <h4>Team: Knicks</h4>
            
          </div>


          <button onClick={()=>fetchApi()}>


            click
          </button>
        </RowContainer>
      
        


    );

}

export default Players;
