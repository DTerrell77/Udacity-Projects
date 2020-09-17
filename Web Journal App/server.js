// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Express to run server and routes
const express = require('express');

// Start up an instance of an app
const app = express();

const bodyParser = require('body-parser');

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Init the main folder
app.use(express.static('website'));

// Setup Server
const port = 3000;

const server = app.listen(port, listening());

//Callback function to debug
function listening() {
    console.log(`Server running on localhost: ${port}`);
}

// Init GET route with callback function
app.get('/all', sendData);

function sendData (req, res) {
    res.send(projectData);
}

// Init POST route 
app.post('/add', pushData);

function pushData(req, res){
    //Define a variable in order to grab data pulled 
    //from the website and get the API
    let data = req.body;
    console.log(data);
    projectData['location'] = data.location;
    projectData['country'] = data.country;
    projectData['date'] = data.date;
    projectData['temp'] = data.temp;
    projectData['content'] = data.content;
    console.log(projectData);
}
