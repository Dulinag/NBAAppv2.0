import React, { useState } from 'react';
import playerNames from './playerNames.json';
import './App.css';
import playerStats from './playerStats.json';

import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

const Titlecontainer = styled.div`

font-size: 50px;
text-align:center;
`
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
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;

  
  margin: auto;
`
const api = axios.create({baseURL: `https://www.balldontlie.io/api/v1/`})

function Players() {

  const {id} = useParams()
  console.log(id)

    const [players, setPlayers] = useState(playerStats);
    const [selectedPlayer, setSelectedPlayer] = useState(null);
    const [playerInfo, setPlayerInfo] = useState()
  
    // const handlePlayerClick = (player) => {
  
    //   setSelectedPlayer(player);
    // }
    console.log(playerInfo)
    console.log(selectedPlayer)



    const fetchApi = async () => {


      await api.get(`season_averages?&player_ids[]=${id}`, null,)
  
      .then((res)=>{ 
          console.log(res.data.data)
          let player = res.data.data[0]
          setSelectedPlayer(player)

          api.get(`players/${id}`, null)
          .then((res => {
            setPlayerInfo(res.data)
            console.log(res)
          }))
          .catch(err => console.log(err))
  
      })
      .catch((err)=>{
          console.log(err)
      })
    }
  
  React.useEffect(() =>{
  
      fetchApi();
  },[]
  
  
  )
    return (


        <>
        <Titlecontainer>

          {
          playerInfo ? playerInfo.first_name + ' ' + playerInfo.last_name: null
          
          }
          </Titlecontainer>
        <RowContainer>

        
          <table class="table">
  <thead>
    <tr>
      <th scope="col">asists</th>
      <th scope="col">Blocks</th>
      
      <th scope="col">fg3_pct</th>
      <th scope="col">fg3a</th>
      <th scope="col">fg3m</th>
      <th scope="col">fg_pct</th>
      <th scope="col">fgm</th>
       <th scope="col">ft_pct</th>
      <th scope="col">fta</th>
      <th scope="col">ftm</th>
      <th scope="col">games_played</th>
      <th scope="col">pf</th>
      <th scope="col">pts</th>
      <th scope="col">Rebounds</th>
      <th scope="col">stl</th>
      <th scope="col">Turnovers</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{selectedPlayer.ast}</th>
      <td>{selectedPlayer.blk}</td>
      
      <td>{selectedPlayer.ast}</td>
      <td>{selectedPlayer.ast}</td>
      <td>{selectedPlayer.ast}</td>

      <td>{selectedPlayer.ast}</td>
      <td>{selectedPlayer.ast}</td>
      <td>{selectedPlayer.ast}</td>
      <td>{selectedPlayer.ast}</td>
      <td>{selectedPlayer.ast}</td>
      <td>{selectedPlayer.ast}</td>
    </tr>
 
 
  </tbody>
</table>

            <h1><Link to="/">Go to Homepage</Link>   </h1>         
    
          


 

          <div>


          </div>

{/* 
          <button onClick={()=>fetchApi()}>


            click
          </button> */}
        </RowContainer>
      
        
</>

    );

}

export default Players;
