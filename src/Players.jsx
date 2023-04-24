import React, { useState } from 'react';
import playerNames from './playerNames.json';

import playerStats from './playerStats.json';

import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

const Titlecontainer = styled.div`

font-size: px50;

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

        
        <RowContainer>
<Titlecontainer>
          {playerInfo.first_name 
          + " "
          + playerInfo.last_name}
          </Titlecontainer>
        
        <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>

            <h1><Link to="/">Go to Homepage</Link>   </h1>         
    
          


 

          <div>


          </div>

{/* 
          <button onClick={()=>fetchApi()}>


            click
          </button> */}
        </RowContainer>
      
        


    );

}

export default Players;
