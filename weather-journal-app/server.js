// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
const port = 8000;

// Setup Server

// test server
const server = app.listen(port, listening);

function listening() {
    console.log(`running on localhost:${port}`);
 };
 

 //get all data route
 app.get('/All', (req, res) => {
    res.send(projectData);
 })

 //Post data route
 app.post('/postData', (req, res) => {
    projectData = {
       temp: req.body.temp,
       date: req.body.date,
       content: req.body.content
    };
    res.send(projectData);
 })