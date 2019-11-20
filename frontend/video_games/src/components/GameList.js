import React from 'react';
import GameForm from './GameForm'
import Game from './Game'
import axios from "axios"

class GameList extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        games: []
      }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/games/all')
      .then(response => this.setState({games: response.data}))
      .catch(error => console.log(error))
// axios.get('http://localhost:3333/smurfs')
//         .then((response) => this.setState({smurfs: response.data}) )
//               .catch((error) => console.log(error))

  }


  render() {
    return (
      <div>
        <GameForm/>
        <Game />
      </div>
    );
  }
}
export default GameList;
