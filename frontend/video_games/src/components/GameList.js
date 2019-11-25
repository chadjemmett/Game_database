import React from 'react';
import GameForm from './GameForm'
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
      axios.post("http://localhost:3000/api/games", {
          title: this.state.title, 
          release_date: this.state.release_date,
          platform: this.state.platform,
          genre: this.state.genre,
          developer: this.state.developer,
          publisher: this.state.publisher,
          favorite: this.state.favorite,
          description: this.state.description,

      })
      .then(res => this.setState({games: res.data, 
          title: "", 
          release_date: "",
          platform: "",
          genre: "",
          developer: "",
          publisher: "",
          favorite: 0,
          description: "",
      }))
      .catch(error => this.setState({error: error}))
  }
  

  setFavorite = (id) => {
    const data = {favorite: null}
    let stateCopy = this.state.games

    stateCopy.map(item => {
      if(item.id === id) {
        item.favorite === 0 ? item.favorite = 1 : item.favorite = 0
        data.favorite = item.favorite
      }
    })
    axios.put(`http://localhost:3000/api/games/${id}`, data )
      .then(response => this.setState({games: response.data}))
      .catch(error => this.setState({error: error}))
  }

  sortState = (category) => {
    axios.get(`http://localhost:3000/api/games/${category}`)
      .then((response => this.setState({games: response.data})))
      .catch(error => this.setState({error: error}))
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
              <th onClick={() => this.sortState("release_date")}>Release Date</th>
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
              <td>{item.favorite === 1 ? "⭐️" :"-"}</td>
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
