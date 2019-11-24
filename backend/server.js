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
  const {title} = req.body
  const data = req.body
  db('games')
    .insert(data)
    .then(id => res.status(201).json(id))
    .catch(err => res.status(500).json({message: "There was a problem"}))
})



server.get("/api/games/all", (req, res) => {
  db('games').orderBy([{column: "favorite", order: "desc"}, {column: "title"}])
    .then(allGames => {res.status(200).json(allGames)})
    .catch(err => res.status(500).json({message: "There was a problem getting the resources"}))
})

server.get("/api/games/:order", (req, res) => {
  const {order} = req.params
    console.log(order)
  db('games').orderBy([{column: "favorite", order: "desc"}, {column: `${order}`}])
    .then(allGames => {res.status(200).json(allGames)})
    .catch(err => res.status(500).json({message: "There was a problem getting the resources"}))
})

server.get("/api/games/by/year", (req, res) => {
  db('games').orderBy([{column: "favorite", order: "desc"}, {column: "release_date"}])
    .then(allGames => {res.status(200).json(allGames)})
    .catch(err => res.status(500).json({message: "There was a problem getting the resources"}))
})
server.get("/api/games/by/year", (req, res) => {
  db('games').orderBy([{column: "favorite", order: "desc"}, {column: "release_date"}])
    .then(allGames => {res.status(200).json(allGames)})
    .catch(err => res.status(500).json({message: "There was a problem getting the resources"}))
})
server.put("/api/games/:game_id", (req, res) => {
  const {game_id} = req.params
    // the front end should just send the favorite in the request
  const {favorite} = req.body
  db('games')
    .where({id: game_id})
    .update({favorite: favorite})
    .then(count => res.status(200).json({message: "You favorited a game", count}))
    .catch(err => res.status(500).json({message: "There was a problem updating the resource"}))
})

server.delete("/api/games/:game_id", (req, res) => {
   const {game_id} = req.params
   db('games')
    .where({id: game_id})
    .del()
    .then(count => res.status(200).json({message: "you deleted a resource", count}))
    .catch(err => res.status(500).json({message: "There was a problem deleting the resource"}))
})

