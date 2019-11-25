
import React from 'react';
// import Table from 'react-bootstrap/Table'

function Game(props) {
  return (
   <tbody>
   <div style={container} onClick={() => props.setFavorite(props.gameData.id)}>
        <p>{props.gameData.title}</p>
        <p>{props.gameData.release_date}</p>
        <p>{props.gameData.platform}</p>
        <p>{props.gameData.publisher}</p>
        <p>{props.gameData.favorite}</p>
        <p>{props.gameData.genre}</p>
    </div>
   </tbody>
  );
}

export default Game


const container = {
  display: "flex",
  justifyContent: "space-around",

}
