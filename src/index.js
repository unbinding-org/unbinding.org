const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()
const PORT = 1108

app.use(express.static('public'))

app.set('views', path.join(__dirname, '/templates'))
app.set('view engine', 'pug')
app.get('/', (req, res) => {
  res.render('layout', {})
})

app.listen(PORT)

console.log('unbinding.org website listening on port', PORT)