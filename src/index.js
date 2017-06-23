const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()
const PORT = 1108

app.use(express.static('public'))

app.set('views', path.join(__dirname, '/templates'))
app.set('view engine', 'pug')

app.get('/', (req, res) => res.render('index', {}))

app.get('/about/why', (req, res) => res.render('about/why', {}))

app.get('/wisdom', (req, res) => res.render('wisdom', {}))
app.get('/wisdom/understanding', (req, res) => res.render('wisdom/understanding', {}))
app.get('/wisdom/intention', (req, res) => res.render('wisdom/intention', {}))

app.get('/virtue', (req, res) => res.render('virtue', {}))
app.get('/virtue/speech', (req, res) => res.render('virtue/speech', {}))
app.get('/virtue/action', (req, res) => res.render('virtue/action', {}))
app.get('/virtue/livelihood', (req, res) => res.render('virtue/livelihood', {}))

app.get('/calm', (req, res) => res.render('calm', {}))
app.get('/calm/effort', (req, res) => res.render('calm/effort', {}))
app.get('/calm/mindfulness', (req, res) => res.render('calm/mindfulness', {}))
app.get('/calm/concentration', (req, res) => res.render('calm/concentration', {}))


app.listen(PORT)

console.log('unbinding.org website listening on port', PORT)