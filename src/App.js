import React, { useState, useEffect } from 'react';
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
import {Col, Container, Form, Row } from "react-bootstrap";

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
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: block;
  margin: auto;
`;

const PageContainer = styled.div`
display: flex;
width: 100%;
justify-content: center;
flex-direction: column;
padding: 2%;
align-items: center;
`

// const Searchbar = styled.div`

//   margin-top: 2rem;
//   display: flex;
//   margin: auto;

// `;
const Header = styled.div`

display: flex;
justify-content: center;
width: 50%;
height:auto;
flex-direction: column;
align-items: center;

`
const PlayerListContainer = styled.div`
display: flex;
flex-direction: row;
width: 50%;
height:10vh;
flex-wrap: wrap;
`




function App() {

  const [players, setPlayers] = useState(playerStats);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  
  console.log(filteredList)
  const handlePlayerClick = (player) => {
    setSelectedPlayer(player);
  }

  const handleSearch = (value) => {
    let string = value.toLowerCase()
    setSearchTerm(string)
    
  }

  useEffect(() => {
    console.log(searchTerm)
    let array = [];

    playerStats.forEach((item) => {
      if(item.data.length === 0){
        console.log("catch")
      }else {
         let searchString = (item.data[0].first_name.toLowerCase() + " " + item.data[0].last_name.toLowerCase())
         if(searchString.includes(searchTerm)){
          array.push(item)
         }
      }
     
    })
   setFilteredList(array)
  }, [searchTerm])

  // console.log(selectedPlayer)
  return (
    <PageContainer>
     
        
        <Header>
          <h1>Hoops For Ballers</h1>

        <Container className="mt-5">
        <Row>
          <Col >
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 rounded-pill"
                aria-label="Search"
                onChange={(e) => handleSearch(e.target.value)}
              />
              {/* <Button className="rounded-pill" variant="outline-primary">
                Search
              </Button> */}
            </Form>
          </Col>
        </Row>
        </Container>

      </Header>

      <Image src={TitleImage} alt="Hoops For Ballers" />

      
      <PlayerListContainer>
      {/* div className="row row-cols-2 row-cols-md-3 g-4 */}

        {
          
        
        filteredList.map((player, index) => {
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
       </PlayerListContainer>
      
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
    </PageContainer>
  );
}

export default App;