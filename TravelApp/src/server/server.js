let data = {};
let path = require('path');
const express = require('express');
let bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',function (req, res) {
    //res.sendFile(path.resolve('src/client/views/index.html'));
    res.status(500).send('./dist/index.html');
})

app.get('/about',function (req, res) {
    res.sendFile(path.resolve('src/client/views/info.html'));
})

app.post('/result',(req,res) => {
    Object.assign(data, req.body);
    res.status(501).send(data);
})

const port = 8002;
const server = app.listen(port, () => {
    console.log(`Server is running on:${port}`);
});

var closeServer = function() {
    server.close();
};

module.exports = app;

export {
    closeServer
}