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
        title: "", 
          release_date: "",
          platform: "",
          genre: "",
          developer: "",
          publisher: "",
          favorite: 0,
      }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/games/all')
      .then(response => this.setState({games: response.data}))
      .catch(error => this.setState({error: error}))
  }

  handleChange = (e)  => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let copyGames = this.state.games
    copyGames.push({
        title: this.state.title,
        release_date: this.state.release_date,
        genre: this.state.genre,
        developer: this.state.developer,
        platform: this.state.platform,
        publisher: this.state.publisher,
        favorite: this.state.favorite
    })
      copyGames = copyGames.sort((a, b) => {
        if(a.favorite > b.favorite) {
          return -1
        }
        if(a.favorite < b.favorite) {
          return 1
        }

      })
      this.setState({games: copyGames})

      axios.post('http://localhost:3000/api/games', {
          title: this.state.title,
          release_date: this.state.release_date,
          genre: this.state.genre,
          developer: this.state.developer,
          platform: this.state.platform,
          publisher: this.state.publisher,
          favorite: this.state.favorite
          })
     .then(response => this.setState({message: response}))
     .catch(err => this.setState({error: err}))
  }

  setFavorite = (id) => {
    let stateCopy = this.state.games
    const data ={favorite: null}
      stateCopy.map(item => {
        if(item.id === id) {
          item.favorite === 0 ? item.favorite = 1 : item.favorite = 0
          data.favorite = item.favorite
        }
      })
      stateCopy = stateCopy.sort((a, b) => {
        if(a.favorite > b.favorite) {
          return -1
        }
        if(a.favorite < b.favorite) {
          return 1
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
        <GameForm newGameData={this.state.newGame} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        {this.state.games.map(item => <Game key={item.id} gameData={item} setFavorite={this.setFavorite}/>)}
      </div>
    );
  }
}
export default GameList;
