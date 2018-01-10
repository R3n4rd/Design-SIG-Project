var express = require('express')
var app = express()

app.use('/javascript_project', express.static(__dirname + '/javascript_project.js'));
// app.use('/capitales_amerique_sud', express.static(__dirname + '/capitales_amerique_sud.geojson'));
app.use('/countries', express.static(__dirname + '/countries.geojson'));
app.use('/css', express.static(__dirname + '/pr.css'));

// Chargement des images
app.use('/zebu', express.static(__dirname + '/Image/zebu.png'));
app.use('/epfl', express.static(__dirname + '/Image/Logo_EPFL.png'));
app.use('/refresh', express.static(__dirname + '/Image/resfresh-icon.png'));

// ajout de superagent
app.use('/superagent', express.static(__dirname + '/node_modules/superagent/superagent.js'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/pr.html');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))

var mongores = require('./mongoresult');
app.use('/', mongores);
