
import React from 'react';

function Game(props) {
  return (
   <div style={container} onClick={() => props.setFavorite(props.gameData.id)}>
      <div>
        <p>{props.gameData.title}</p>
      </div>
      <div>
        <p>{props.gameData.release_date}</p>
      </div>
      <div>
        <p>{props.gameData.platform}</p>
      </div>
      <div>
        <p>{props.gameData.publisher}</p>
      </div>
      <div>
        <p>{props.gameData.favorite}</p>
      </div>
      <div>
        <p>{props.gameData.genre}</p>
      </div>
    </div>
  );
}

export default Game;


const container = {
  display: "flex",
  justifyContent: "space-around",

}
