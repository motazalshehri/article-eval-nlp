const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mockAPIResponse = require('./mockAPI.js');
const http = require('http');

const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'));

console.log(__dirname);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.listen(8081, function () {
    console.log('listening on port 8081!')
})

app.post('/test', bodyParser.json(), function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/analysis',bodyParser.json(), function (req, res) {
    console.log(req.body)
    analyse(req.body.url, res);
    
})

const APIKey = process.env.API_KEY

function analyse(link, res) {
               
    let path = `/sentiment-2.1?key=${APIKey}&of=json&url=${link}&lang=en`;
    console.log(path);

    var options = {
        host: "api.meaningcloud.com",
        path: path,
        method: 'POST'
    };

    callback = function(response) {
        let data = '';

        response.on('data', function (stream) {
            data+= stream;
        });

        response.on('end', function () {
            res.send(data)
        });
    }

    http.request(options, callback).end();
}