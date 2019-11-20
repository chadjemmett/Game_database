const express = require('express')
const server = express()
const knex = require("knex")
const knexConfig = require("./knexFile.js")
const db = knex(knexConfig.development)
server.use(express.json())
module.exports = server


server.get("/", (req, res) => {
  res.status(200).json("Working")
})


server.post("/api/games", (req, res) => {
  const data = req.body
  db('games')
    .insert((data))
    .then(id => res.status(201).json(id))
    .catch(err => res.status(500).json({message: "There was a problem creating the resource"}))
})
