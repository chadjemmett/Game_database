import React from 'react';
import GameForm from './GameForm'
import Game from './Game'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios"

class GameList extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        games: [],
        error: "",
        message: "",
        title: "", 
          release_date: "",
          platform: "",
          genre: "",
          developer: "",
          publisher: "",
          favorite: 0,
          description: "",
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
    const filteredGames = copyGames.filter(item => item.title === this.state.title)
    if(filteredGames.length === 0) {
      copyGames.push({
          title: this.state.title,
          release_date: this.state.release_date,
          genre: this.state.genre,
          developer: this.state.developer,
          platform: this.state.platform,
          publisher: this.state.publisher,
          favorite: this.state.favorite,
          description: this.state.description
      })
        copyGames = copyGames.sort((a, b) => {
          if(a.favorite > b.favorite) {
            return -1
          }
          if(a.favorite < b.favorite) {
            return 1
          }
        })
        this.setState({games: copyGames,
          title: "",
          release_date: "",
          publisher: "",
          genre: "",
          platform: "",
          developer: "",
          description: "",
        })

        axios.post('http://localhost:3000/api/games', {
            title: this.state.title,
            release_date: this.state.release_date,
            genre: this.state.genre,
            developer: this.state.developer,
            platform: this.state.platform,
            publisher: this.state.publisher,
            favorite: this.state.favorite,
            description: this.state.description,
            })
         .then(response => this.setState({message: response}))
         .catch(err => this.setState({error: err}))
    } else {
      this.setState({message: "This game already exists"})
    }
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

  sortState = (category) => {
    const gamesCopy = this.state.games
      gamesCopy.sort((a, b) => {
        if(a[category] < b[category]) {
          return - 1
        }
        if(a[category] > b[category]) {
          return  1
        }
      })
    console.log(gamesCopy)
    this.setState({games: gamesCopy})
  }


  render() {
    return (
      <div>
        <GameForm props={this.state} newGameData={this.state.newGame} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th onClick={() => this.sortState("favorite")}>Favorite</th>
              <th onClick={() => this.sortState("title")}>Title</th>
              <th onClick={() => this.sortState("release_year")}>Release Date</th>
              <th onClick={() => this.sortState("platform")}>Platform</th>
              <th onClick={() => this.sortState("genre")}>Genre</th>
              <th onClick={() => this.sortState("publisher")}>Publisher</th>
              <th onClick={() => this.sortState("developer")}>Developer</th>
              <th onClick={() => this.sortState("description")}>Description</th>
            </tr>
          </thead>
          <tbody>

        {this.state.games.map(item => 
            <React.Fragment key={item.id}>
            <tr onClick={() => this.setFavorite(item.id)} key={item.id}>
              <td>{item.favorite === 1 ? "*" : "X"}</td>
              <td>{item.title}</td>
              <td>{item.release_date}</td>
              <td>{item.platform}</td>
              <td>{item.genre}</td>
              <td>{item.publisher}</td>
              <td>{item.developer}</td>
              <td>{item.description}</td>
            </tr>
            </React.Fragment>
        )}
      </tbody>
      </Table>
      </div>

    );
  }
}
export default GameList;
