/**
 * Created by sumeetdubey on 4/4/18.
 */

var express=require('express');
var bodyParser=require('body-parser');

var app=express();
var port= 3000;

app.use(express.static(__dirname +'/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//database
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);


require("./server/app.js")(app, db);
app.listen(port);