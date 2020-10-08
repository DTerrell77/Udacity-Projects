const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios')


console.log(`Your API key is ${process.env.API_KEY}`);
const app = express()

// You could call it aylienapi, or anything else
var aylien = require("aylien_textapi");
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'))

console.log(__dirname)



app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})


app.post('/test', (req, res) => {
    console.log(req.body.website)
    textapi.sentiment({
        url: req.body.website
    }, function (error, response) {
        if (error === null) {
            console.log(response);
            res.send(response);
        }
    });
});

 app.post('/test', (req, res) => {

     axios.post("https://api.meaningcloud.com/sentiment-2.1", {

     },
         {
             params: {
                 key: "process.env.API_KEY",
                 lang: "en",
                 txt: req.body.mysite
             }
         }).then(function (r) {

             res.json(r.data);
         }).catch(function (e) { console.log(e) })

 });