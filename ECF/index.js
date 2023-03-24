const express = require('express');
const app = express();
let port = 3000;

const Teams = require('./data/teams');
const _ = require('lodash');
const { v4: uuidv4 } = require('uuid');

app.use('/assets', express.static('./client/assets'));
app.use('/pages', express.static('./client/pages'));
app.use(express.json());

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html');
  });
  
app.get('/team', (req, res) => {
    res.send(Teams);
  });

app.get('/team/:id', (req, res) => {
    let id = req.params.id;
    let team = _.find(Teams, (o) => {
      return o._id == id;
    });
    res.send(team);
  });

app.put('/team/:id', (req, res) => {
    let id = req.params.id;
    let index = _.findIndex(Teams, (o) => {
      return o._id == id;
    });
    // console.log(req.body)
    Teams[index] = req.body;
    // console.log(Films[index])
    res.sendStatus(200);
  });

app.post('/team', (req, res) => {
    let newTeam = req.body;
    newTeam._id = uuidv4();
    Teams.push(newTeam);
    res.sendStatus(200);
  });

app.delete('/team/:id', (req, res) => {
    let id = req.params.id;
    let index = _.findIndex(Teams, (o) => {
      return o._id == id;
    });
    Teams.splice(index, 1);
    res.sendStatus(200);
  });