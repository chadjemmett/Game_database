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
