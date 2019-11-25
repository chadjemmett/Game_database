const express = require('express')
const cors = require('cors')
const server = express()
const knex = require("knex")
const knexConfig = require("./knexFile.js")
const db = knex(knexConfig.development)
server.use(cors())
server.use(express.json())
module.exports = server

server.post("/api/games", (req, res) => {
  console.log(req.body)
  const {title, release_date} = req.body
  console.log(title)
  const data = req.body
  if(title === "" || release_date === "") { 
    res.status(422).json({message: "Title/Year Can't be blank"})
  } else {
    db('games')
      .insert(data)
      .then(id => {
        db('games').orderBy([{column: "favorite", order: "desc"}, {column: "title"}])
          .then(allGames => {res.status(200).json(allGames)})
      })
      .catch(err => res.status(500).json({message: "There was a problem"}))
  }
})

server.get("/api/games/all", (req, res) => {
  db('games').orderBy([{column: "favorite", order: "desc"}, {column: "title"}])
    .then(allGames => {res.status(200).json(allGames)})
    .catch(err => res.status(500).json({message: "There was a problem getting the resources"}))
})

server.get("/api/games/:order", (req, res) => {
  const {order} = req.params
  db('games').orderBy([{column: "favorite", order: "desc"}, {column: `${order}`}])
    .then(allGames => {res.status(200).json(allGames)})
    .catch(err => res.status(500).json({message: "There was a problem getting the resources"}))
})


server.put("/api/games/:game_id", (req, res) => {
  const {game_id} = req.params
  const {favorite} = req.body
  db('games')
    .where({id: game_id})
    .update({favorite: favorite})
    .then(count => {
      db('games').orderBy([{column: "favorite", order: "desc"}, {column: "title"}])
        .then(allGames => {res.status(200).json(allGames)})
    })
    .catch(err => res.status(500).json({message: "There was a problem updating the resource"}))
})

server.delete("/api/games/:game_id", (req, res) => {
  const {game_id} = req.params
  db('games')
  .where({id: game_id})
  .del()
  .then(count => {
    if(count) {
      res.status(200).json({message: "Deleted resource", count})
    } else {
      res.status(404).json({message: "No resource with that ID"})
    }
  })
  .catch(err => res.status(500).json({message: 'There was a prlblem deleting the resouce'}))
})
