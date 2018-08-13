// TODO: make this work.
// if yuo go to localhost:3000 the app
// there is expected crud to be working here
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var _ = require('lodash');

// express.static will serve everything
// with in client as a static resource
// also, it will server the index.html on the
// root of that directory on a GET to '/'
app.use(express.static('client'));

// body parser makes it possible to post JSON to the server
// we can accss data we post on as req.body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var lions = [];
var id = 0;

// TODO: make the REST routes to perform CRUD on lions

app.get('/lions/:id', function (req, res) {
    let lion = getLion(req.params.id);

    if (!lion) {
        resourceNotFound(res);
        return;
    }    

    res.json(lion);
});

app.post('/lions', function (req, res) {
    /*if (err) {
        res.statusCode = 500;
        res.json({ error: "Alto error ameo" })
    }*/

    let lion = req.body;
    lion.id = ++id;

    lions.push(lion);

    res.json(lion);
});

app.get('/lions', function (req, res) {
    res.json(lions);
});

app.delete('/lions/:id', function (req, res) {
    let lion = getLion(req.params.id);

    if (!lion) {
        resourceNotFound(res);
        return;
    }

    lions.splice(lions.indexOf(lion), 1);
    res.statusCode = 204;
    res.json();
});

function resourceNotFound (response) {
    response.statusCode = 500;
    response.json({error: "The requested resource doesn't exist"});
}

function getLion(id) {
    var result = lions.find(lion => {
        return lion.id == id
    })

    return result;
};

function removeLion(lion) {
    const index = array.indexOf(lion);

    if (index !== -1) {
        array.splice(index, 1);
    }
}

app.listen(3000);
console.log('on port 3000');
