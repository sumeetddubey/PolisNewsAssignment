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

require("./server/app.js")(app);
app.listen(port);