const dotenv = require("dotenv");
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const cors = require('cors')
var bodyParser = require('body-parser')

console.log(`API Key = ${process.env.API_KEY}`);

const app = express()
app.use(cors());
app.use(express.static('dist'))
// uses json 
app.use(bodyParser.json())
// uses url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

console.log(__dirname)
app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// Listens to what port the app will look for upon incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!') 
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

