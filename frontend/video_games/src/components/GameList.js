import React from 'react';
import GameForm from './GameForm'
import Game from './Game'
import axios from "axios"

class GameList extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        games: [],
        error: "",
      }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/games/all')
      .then(response => this.setState({games: response.data}))
      .catch(error => this.setState({error: error}))
  }

  setFavorite = (id) => {
    const stateCopy = this.state.games
    const data ={favorite: null}
      stateCopy.map(item => {
        if(item.id === id) {
          item.favorite === 0 ? item.favorite = 1 : item.favorite = 0
          data.favorite = item.favorite
        }
      })
    this.setState({games: stateCopy})
    axios.put(`http://localhost:3000/api/games/${id}`, data )
      .then(response => this.setState({message: response.data}))
      .catch(error => this.setState({error: error}))
  }


  render() {
    return (
      <div>
        <GameForm/>
        {this.state.games.map(item => <Game key={item.id} gameData={item} setFavorite={this.setFavorite}/>)}
      </div>
    );
  }
}
export default GameList;
