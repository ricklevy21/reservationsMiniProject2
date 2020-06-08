//import dependencies
var express = require("express");
var path = require("path");

//create the express server
var app = express();

//define the PORT where server will listen
var PORT = process.env.PORT || 8080;

//start the server
app.listen(PORT, function(){
    console.log("The server is running and listening at http://localhost:"+PORT)
})

//middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//data

var tables = [{
    customerName: "Rick Levy",
    customerEmail: "ricklevy21@test.com",
    customerID: "52066",
    phoneNumber: "303-808-6539"
}]
var waitlist = [{
    customerName: "Shawn Cohen",
    customerEmail: "shawncohen15@test.com",
    customerID: "12345",
    phoneNumber: "713-459-8136"
}];

//routes
//------------------------------------------------------------------------------------------------------------------

//pages

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "./public/home.html"))
})
app.get("/reserve", function(req, res){
    res.sendFile(path.join(__dirname, "./public/reserve.html"))
})
app.get("/tables", function(req, res){
    res.sendFile(path.join(__dirname, "./public/tables.html"))
})

//data

app.get("/api/tables", function(req, res){
    res.json(tables)
})

app.get("/api/waitlist", function(req, res){
    res.json(waitlist)
})